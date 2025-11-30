// Formspree Contact Form - No setup required, works immediately
// Just replace the form action URL with your Formspree endpoint

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
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
            const privacyCheckbox = formData.get('privacy');
            
            // Validate required fields
            if (!firstName || !lastName || !email || !service || !message) {
                showNotification('Please fill in all required fields!', 'error');
                return;
            }
            
            if (!privacyCheckbox) {
                showNotification('Please accept the Privacy Policy and Terms & Conditions to continue.', 'error');
                const privacyInput = document.getElementById('privacy');
                const privacyLabel = privacyInput ? privacyInput.closest('.checkbox-label') : null;
                
                if (privacyInput && privacyLabel) {
                    privacyLabel.classList.add('error');
                    privacyInput.focus();
                    privacyInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.glow-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            contactForm.classList.add('submitting');
            
            // Prepare form data for Formspree
            const submissionData = new FormData();
            submissionData.append('name', `${firstName} ${lastName}`);
            submissionData.append('email', email);
            submissionData.append('phone', phone || 'Not provided');
            submissionData.append('company', company || 'Not provided');
            submissionData.append('service', getServiceName(service));
            submissionData.append('budget', getBudgetName(budget) || 'Not specified');
            submissionData.append('timeline', getTimelineName(timeline) || 'Not specified');
            submissionData.append('message', message);
            submissionData.append('newsletter', newsletter ? 'Yes' : 'No');
            submissionData.append('_subject', `New Project Inquiry from ${firstName} ${lastName} - CodenixHub`);
            submissionData.append('_replyto', email);
            submissionData.append('_next', window.location.href + '?success=true');
            
            // Submit to Formspree
            fetch('https://formspree.io/f/YOUR_FORM_ID', { // Replace with your Formspree form ID
                method: 'POST',
                body: submissionData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showNotification('Message sent successfully! We will contact you soon.', 'success');
                    contactForm.reset();
                    
                    // Optional: Send WhatsApp notification to you
                    setTimeout(() => {
                        sendWhatsAppNotification({
                            from_name: `${firstName} ${lastName}`,
                            from_email: email,
                            phone: phone || 'Not provided',
                            company: company || 'Not provided',
                            service: getServiceName(service),
                            budget: getBudgetName(budget) || 'Not specified',
                            timeline: getTimelineName(timeline) || 'Not specified',
                            message: message
                        });
                    }, 2000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                showNotification('Failed to send message. Please try the alternative contact methods below.', 'error');
                
                // Show fallback options
                showFallbackOptions({
                    from_name: `${firstName} ${lastName}`,
                    from_email: email,
                    phone: phone || 'Not provided',
                    company: company || 'Not provided',
                    service: getServiceName(service),
                    budget: getBudgetName(budget) || 'Not specified',
                    timeline: getTimelineName(timeline) || 'Not specified',
                    message: message
                });
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

// Send WhatsApp notification to you (optional)
function sendWhatsAppNotification(data) {
    const message = `🚀 NEW LEAD ALERT - CodenixHub!\n\n` +
                   `👤 Name: ${data.from_name}\n` +
                   `📧 Email: ${data.from_email}\n` +
                   `📱 Phone: ${data.phone}\n` +
                   `🏢 Company: ${data.company}\n\n` +
                   `💼 Service: ${data.service}\n` +
                   `💰 Budget: ${data.budget}\n` +
                   `⏰ Timeline: ${data.timeline}\n\n` +
                   `📝 Message:\n${data.message}\n\n` +
                   `---\n*Auto-notification from CodenixHub Website*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918668846240?text=${encodedMessage}`;
    
    // This opens in a new tab for you to quickly send to yourself
    window.open(whatsappURL, '_blank');
}

// Fallback options if form submission fails
function showFallbackOptions(data) {
    const fallbackHTML = `
        <div style="max-width: 500px; text-align: left;">
            <h3 style="color: var(--primary-color); margin-bottom: 20px;">📧 Form submission failed. Here are alternative ways to contact us:</h3>
            
            <div style="background: var(--bg-card); padding: 20px; border-radius: 10px; margin: 15px 0;">
                <h4 style="color: var(--text-primary); margin-bottom: 15px;">📱 WhatsApp (Recommended)</h4>
                <a href="https://wa.me/918668846240?text=${encodeURIComponent(`Hi! I'm ${data.from_name} (${data.from_email}). I'm interested in ${data.service}. ${data.message}`)}" 
                   target="_blank" 
                   style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; border-radius: 25px; text-decoration: none; margin-bottom: 10px;">
                   <i class="fab fa-whatsapp"></i> Send WhatsApp Message
                </a>
                <p style="font-size: 13px; color: var(--text-muted);">Click to open WhatsApp with your details pre-filled</p>
            </div>
            
            <div style="background: var(--bg-card); padding: 20px; border-radius: 10px; margin: 15px 0;">
                <h4 style="color: var(--text-primary); margin-bottom: 15px;">📧 Email Directly</h4>
                <a href="mailto:codenixhubtechnologies@gmail.com?subject=Project Inquiry from ${data.from_name}&body=${encodeURIComponent(`Name: ${data.from_name}\nEmail: ${data.from_email}\nPhone: ${data.phone}\nCompany: ${data.company}\nService: ${data.service}\nBudget: ${data.budget}\nTimeline: ${data.timeline}\n\nMessage:\n${data.message}`)}" 
                   style="display: inline-block; background: var(--primary-color); color: var(--bg-primary); padding: 10px 20px; border-radius: 25px; text-decoration: none; margin-bottom: 10px;">
                   <i class="fas fa-envelope"></i> Open Email Client
                </a>
                <p style="font-size: 13px; color: var(--text-muted);">Click to open your email client with details pre-filled</p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border-glow);">
                <p style="font-size: 14px; color: var(--text-secondary);">We typically respond within 2-4 hours during business hours.</p>
            </div>
        </div>
    `;
    
    showNotification(fallbackHTML, 'info');
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
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <div style="flex: 1;">${message}</div>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 10000);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}