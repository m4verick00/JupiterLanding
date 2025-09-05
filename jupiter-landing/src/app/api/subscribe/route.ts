import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // In a real implementation, you would integrate with:
    // - Buttondown API
    // - Mailjet API
    // - ConvertKit API
    // - Or your own email service

    // For now, we'll just log the email and return success
    console.log('Newsletter subscription:', email);

    // Example Buttondown integration:
    // const buttondownApiKey = process.env.BUTTONDOWN_API_KEY;
    // if (buttondownApiKey) {
    //   const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Token ${buttondownApiKey}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email,
    //       tags: ['jupiter-landing'],
    //     }),
    //   });
    //
    //   if (!response.ok) {
    //     throw new Error('Failed to subscribe to newsletter');
    //   }
    // }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
