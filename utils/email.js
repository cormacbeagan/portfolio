import axios from 'axios';

export async function sendMail(inputs) {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/mail',
      headers: {
        'Content-Type': 'application/json',
      },
      data: inputs,
    });
    return res;
  } catch (err) {
    return err;
  }
}
