import nodemailer from 'nodemailer';

// Create a transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send welcome email
export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Task Manager',
    html: `<h1>Welcome to Task Manager, ${name}!</h1>
           <p>We're excited to have you on board.</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Send task reminder
export const sendTaskReminder = async (email, task) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Reminder: ${task.title}`,
    html: `<h1>Task Reminder</h1>
           <p>This is a reminder for your task: ${task.title}</p>
           <p>Due date: ${task.dueDate}</p>
           <p>Status: ${task.status}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Task reminder sent');
  } catch (error) {
    console.error('Error sending reminder:', error);
  }
};