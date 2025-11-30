// Simple Contact Form - Works Immediately (No Setup Required)
// This creates a mailto link with all form data

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
            
            // Validate required fields
            const privacyCheckbox = formData.get('privacy');
            
            if (!firstName || !lastName || !email || !service || !message) {
                showNotification('Please fill in all required fields!', 'error');
                return;
            }
            
            if (!privacyCheckbox) {
                showNotification('Please accept the Privacy Policy and Terms & Conditions to continue.', 'error');
                // Focus on the privacy checkbox and add error styling
                const privacyInput = document.getElementById('privacy');
                const privacyLabel = privacyInput ? privacyInput.closest('.checkbox-label') : null;
                
                if (privacyInput && privacyLabel) {
                    privacyLabel.classList.add('error');
                    privacyInput.focus();
                    privacyInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Remove error styling when checkbox is checked
                    privacyInput.addEventListener('change', function() {
                        if (this.checked) {
                            privacyLabel.classList.remove('error');
                        }
                    }, { once: true });
                }
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.glow-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Create email content
            const emailSubject = `New Project Inquiry from ${firstName} ${lastName} - CodenixHub`;
            const emailBody = `
NEW PROJECT INQUIRY - CODENIXHUB
================================

CLIENT DETAILS:
• Name: ${firstName} ${lastName}
• Email: ${email}
• Phone: ${phone || 'Not provided'}
• Company: ${company || 'Not provided'}

PROJECT INFORMATION:
• Service: ${getServiceName(service)}
• Budget: ${getBudgetName(budget) || 'Not specified'}
• Timeline: ${getTimelineName(timeline) || 'Not specified'}
• Newsletter: ${newsletter ? 'Yes' : 'No'}

PROJECT DETAILS:
${message}

SUBMISSION DATE: ${new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})}

---
Sent via CodenixHub Website Contact Form
            `.trim();
            
            // Create mailto link
            const mailtoLink = `mailto:codenixhubtechnologies@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Create WhatsApp message
            const whatsappMessage = `🚀 NEW LEAD - CodenixHub!\n\n` +
                                   `👤 ${firstName} ${lastName}\n` +
                                   `📧 ${email}\n` +
                                   `📱 ${phone || 'Not provided'}\n` +
                                   `🏢 ${company || 'Not provided'}\n\n` +
                                   `💼 ${getServiceName(service)}\n` +
                                   `💰 ${getBudgetName(budget) || 'Not specified'}\n` +
                                   `⏰ ${getTimelineName(timeline) || 'Not specified'}\n\n` +
                                   `📝 ${message}\n\n` +
                                   `🕒 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;
            
            const whatsappLink = `https://wa.me/918668846240?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Show options to user
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                showSubmissionOptions(mailtoLink, whatsappLink, {
                    name: `${firstName} ${lastName}`,
                    email: email,
                    service: getServiceName(service)
                });
                
                // Reset form
                contactForm.reset();
            }, 1000);
        });
    }
});

function showSubmissionOptions(mailtoLink, whatsappLink, userData) {
    const modal = document.createElement('div');
    modal.className = 'submission-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>✅ Form Submitted Successfully!</h3>
                <button class="modal-close" onclick="this.closest('.submission-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>Thank you <strong>${userData.name}</strong>! Your inquiry for <strong>${userData.service}</strong> has been received.</p>
                
                <div class="contact-options">
                    <h4>Choose how to send your details:</h4>
                    
                    <div class="option-card">
                        <div class="option-icon">📧</div>
                        <div class="option-content">
                            <h5>Send via Email</h5>
                            <p>Opens your email client with pre-filled message</p>
                            <a href="${mailtoLink}" class="option-btn email-btn">
                                <i class="fas fa-envelope"></i> Open Email
                            </a>
                        </div>
                    </div>
                    
                    <div class="option-card">
                        <div class="option-icon">💬</div>
                        <div class="option-content">
                            <h5>Send via WhatsApp</h5>
                            <p>Opens WhatsApp with pre-filled message</p>
                            <a href="${whatsappLink}" target="_blank" class="option-btn whatsapp-btn">
                                <i class="fab fa-whatsapp"></i> Open WhatsApp
                            </a>
                        </div>
                    </div>
                    
                    <div class="option-card">
                        <div class="option-icon">📞</div>
                        <div class="option-content">
                            <h5>Call Directly</h5>
                            <p>Speak with us immediately</p>
                            <a href="tel:+918668846240" class="option-btn call-btn">
                                <i class="fas fa-phone"></i> Call Now
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="contact-info">
                    <p><strong>Our Contact Details:</strong></p>
                    <p>📧 codenixhubtechnologies@gmail.com</p>
                    <p>📱 +91 8668846240</p>
                    <p>📍 Nagpur, Maharashtra 440001</p>
                </div>
                
                <p class="response-time">We typically respond within 2-4 hours during business hours.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking overlay
    modal.querySelector('.modal-overlay').addEventListener('click', () => {
        modal.remove();
    });
    
    // Auto-close after 30 seconds
    setTimeout(() => {
        if (modal.parentElement) {
            modal.remove();
        }
    }, 30000);
}

// Helper functions (same as before)
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

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
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
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

// Enhanced form validation for checkboxes
document.addEventListener('DOMContentLoaded', function() {
    const privacyCheckbox = document.getElementById('privacy');
    const privacyLabel = privacyCheckbox ? privacyCheckbox.closest('.checkbox-label') : null;
    
    if (privacyCheckbox && privacyLabel) {
        privacyCheckbox.addEventListener('change', function() {
            if (this.checked) {
                privacyLabel.classList.remove('error');
            }
        });
        
        // Make checkbox focusable and accessible
        privacyCheckbox.addEventListener('focus', function() {
            privacyLabel.classList.add('focused');
        });
        
        privacyCheckbox.addEventListener('blur', function() {
            privacyLabel.classList.remove('focused');
        });
    }
});

// Add CSS for focused state
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .checkbox-label.focused .checkmark {
        border-color: var(--primary-color);
        box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
    }
    
    .checkbox-label.error {
        color: #ff4757;
    }
    
    .checkbox-label.error .checkmark {
        border-color: #ff4757;
        box-shadow: 0 0 10px rgba(255, 71, 87, 0.3);
    }
`;
document.head.appendChild(focusStyle);