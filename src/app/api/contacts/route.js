import axios from 'axios';

export async function POST(request) {
    const { name, company, email, phone, services, budget, message } = await request.json();

    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL || 'hello@onedotdigital.co';
    const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@onedotdigital.co';

    console.log('Received data:', { name, email, message });

    if (!brevoApiKey) {
        console.error('BREVO_API_KEY is not set in environment variables.');
        return new Response(JSON.stringify({ success: false, message: 'Server configuration error.' }), { status: 500 });
    }

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ success: false, message: 'All fields are required.' }), { status: 400 });
    }

    try {
        const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
            sender: { email: senderEmail, name: 'EM LP' },
            to: [{ email: receiverEmail }],
            subject: `New message from ${name}`,
            htmlContent: `
                <h1>New Inquiry</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Services:</strong> ${services || 'N/A'}</p>
                <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': brevoApiKey,
            }
        });

        console.log('Email sent successfully:', response.data);
        return new Response(JSON.stringify({ success: true, data: response.data }), { status: 200 });
    } catch (error) {
        console.error('Brevo API Error:', error.response?.data || error.message);
        return new Response(JSON.stringify({ success: false, message: 'Failed to send email.' }), { status: 500 });
    }
}

