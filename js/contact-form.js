// Direct Contact Form Submission - No User WhatsApp Required
// This sends form data directly to your email/WhatsApp without opening user's WhatsApp

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const company = formData.get('company');
            const service = formData.get('service');
            const budget = formData.get('budget');
            const timeline = formData.get('timeline');
            const message = formData.get('message');
            const newsletter = formData.get('newsletter');

            // Validate required fields
            if (!firstName || !lastName || !email || !service || !message) {
                showNotification('Please fill in all required fields!', 'error');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('.glow-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            contactForm.classList.add('submitting');

            // Prepare data for submission
            const submissionData = {
                firstName: firstName,
                lastName: lastName,
                fullName: `${firstName} ${lastName}`,
                email: email,
                phone: phone || 'Not provided',
                company: company || 'Not provided',
                service: getServiceName(service),
                budget: getBudgetName(budget) || 'Not specified',
                timeline: getTimelineName(timeline) || 'Not specified',
                message: message,
                newsletter: newsletter ? 'Yes' : 'No',
                submissionDate: new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            // Submit using Web3Forms (Free service)
            submitToWeb3Forms(submissionData)
                .then(result => {
                    if (result.success) {
                        showNotification('Message sent successfully! We will contact you soon.', 'success');
                        contactForm.reset();

                        // Optional: Auto-notify you via WhatsApp (opens in new tab)
                        setTimeout(() => {
                            sendOwnerNotification(submissionData);
                        }, 2000);
                    } else {
                        throw new Error('Submission failed');
                    }
                })
                .catch(error => {
                    console.error('Submission error:', error);
                    showNotification('Failed to send message. Please try WhatsApp or call directly.', 'error');

                    // Show fallback contact options
                    showContactFallback(submissionData);
                })
                .finally(() => {
                    // Reset button state
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    contactForm.classList.remove('submitting');
                });
        });
    }
});

// Web3Forms Integration (Free, no signup required)
async function submitToWeb3Forms(data) {
    try {
        const formData = new FormData();

        // Web3Forms access key - Your real key
        formData.append('access_key', 'eb3fdd9d-f908-49da-9f3b-292fdcf1480d'); // Your actual access key

        // Form data
        formData.append('name', data.fullName);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('company', data.company);
        formData.append('service', data.service);
        formData.append('budget', data.budget);
        formData.append('timeline', data.timeline);
        formData.append('message', data.message);
        formData.append('newsletter', data.newsletter);
        formData.append('submission_date', data.submissionDate);

        // Email settings
        formData.append('subject', `New Project Inquiry from ${data.fullName} - CodenixHub`);
        formData.append('from_name', 'CodenixHub Website');
        formData.append('to_email', 'codenixhubtechnologies@gmail.com');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            return { success: true, method: 'Web3Forms' };
        } else {
            throw new Error(result.message || 'Web3Forms submission failed');
        }
    } catch (error) {
        console.error('Web3Forms error:', error);
        return { success: false, method: 'Web3Forms', error };
    }
}

// Send notification to you (opens WhatsApp in new tab for you to send to yourself)
function sendOwnerNotification(data) {
    const message = `🚀 NEW LEAD ALERT - CodenixHub!\n\n` +
        `👤 Name: ${data.fullName}\n` +
        `📧 Email: ${data.email}\n` +
        `📱 Phone: ${data.phone}\n` +
        `🏢 Company: ${data.company}\n\n` +
        `💼 Service: ${data.service}\n` +
        `💰 Budget: ${data.budget}\n` +
        `⏰ Timeline: ${data.timeline}\n\n` +
        `📝 Message:\n${data.message}\n\n` +
        `📅 Submitted: ${data.submissionDate}\n\n` +
        `---\n*Auto-notification from CodenixHub Website*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918668846240?text=${encodedMessage}`;

    // This opens in a new tab for you to quickly send to yourself
    window.open(whatsappURL, '_blank');
}

// Helper functions
function getServiceName(value) {
    const services = {
        'web-development': 'Web Development',
        'mobile-app': 'Mobile App Development',
        'ui-ux-design': 'UI/UX Design',
        'seo-marketing': 'SEO & Digital Marketing',
        'ecommerce': 'E-commerce Development',
        'custom-software': 'Custom Software Solutions',
        'api-development': 'API Development & Integration',
        'cloud-solutions': 'Cloud Solutions',
        'consultation': 'General Consultation',
        'other': 'Other'
    };
    return services[value] || value;
}

function getBudgetName(value) {
    const budgets = {
        'under-5k': 'Under $5,000',
        '5k-10k': '$5,000 - $10,000',
        '10k-25k': '$10,000 - $25,000',
        '25k-50k': '$25,000 - $50,000',
        '50k-plus': '$50,000+',
        'discuss': "Let's Discuss"
    };
    return budgets[value] || value;
}

function getTimelineName(value) {
    const timelines = {
        'asap': 'ASAP',
        '1-month': 'Within 1 Month',
        '2-3-months': '2-3 Months',
        '3-6-months': '3-6 Months',
        '6-months-plus': '6+ Months',
        'flexible': 'Flexible'
    };
    return timelines[value] || value;
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

// Fallback contact information
function showContactFallback(data) {
    const fallbackHTML = `
        <div style="max-width: 400px; text-align: left;">
            <h3 style="color: var(--primary-color); margin-bottom: 15px;">Contact Us Directly:</h3>
            <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:codenixhubtechnologies@gmail.com" style="color: var(--primary-color);">codenixhubtechnologies@gmail.com</a></p>
            <p style="margin: 8px 0;"><strong>📱 WhatsApp:</strong> <a href="https://wa.me/918668846240" target="_blank" style="color: var(--primary-color);">+91 8668846240</a></p>
            <p style="margin: 8px 0;"><strong>📞 Phone:</strong> <a href="tel:+918668846240" style="color: var(--primary-color);">+91 8668846240</a></p>
            <hr style="margin: 15px 0; border-color: var(--border-glow);">
            <p style="font-size: 14px; color: var(--text-secondary);">Your details:</p>
            <p style="font-size: 13px; margin: 5px 0;"><strong>Name:</strong> ${data.fullName}</p>
            <p style="font-size: 13px; margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="font-size: 13px; margin: 5px 0;"><strong>Service:</strong> ${data.service}</p>
        </div>
    `;

    showNotification(fallbackHTML, 'info');
}

// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');

    formInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
});

function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }

    // Check if required field is empty
    if (isRequired && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Phone validation (basic)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    // Show error if invalid
    if (!isValid) {
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = errorMessage;
        field.parentElement.appendChild(errorElement);
    }

    return isValid;
}