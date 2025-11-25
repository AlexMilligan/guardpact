
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const state = formData.get('state');
  const zip = formData.get('zip');

  // TODO: Replace this placeholder logic with a real database implementation.
  // You can create a GitHub issue to track this task.
  console.log("Pledge data to be saved:", {
    firstName,
    lastName,
    email,
    state,
    zip,
  });

  return new Response(JSON.stringify({ message: 'Pledge signed successfully!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
