import axios from 'axios';

export async function sendMail(inputs) {
  console.log(inputs);
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/mail',
      headers: {
        'Content-Type': 'application/json',
      },
      data: inputs,
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
