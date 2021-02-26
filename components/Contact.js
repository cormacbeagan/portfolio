import { useRef, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { sendEmail, sendMail } from '../utils/email';
import { useTheme } from '../utils/themeState';
import useForm from '../utils/useForm';
import BtnStyles from './styles/BtnStyles';
import ContactStackContainer from './styles/ContactStackContainer';
import { device } from './styles/sizes';

const H3Styles = styled.h3`
  margin: 0.5rem;
  font-family: var(--oleo);
  font-size: 3rem;
`;

const TextStyles = styled.textarea`
  width: 90%;
  height: 15rem;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.bs};
  font-family: var(--kanit);
  font-size: 2rem;
  text-align: right;
  @media ${device.mobileM} {
    width: 93%;
  }
`;

const EmailStyles = styled.input`
  margin: 1rem 0;
  padding: 0 1rem;
  width: 50%;
  box-shadow: ${(props) => props.theme.bs};
  border: none;
  border-radius: 5px;
  font-family: var(--kanit);
  font-size: 2rem;
  text-align: right;
  z-index: 2;
  @media ${device.tablet} {
    width: 90%;
  }
  @media ${device.mobileL} {
    width: 70%;
  }
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.mobileS} {
    width: 93%;
  }
`;

const CopyStyle = styled.button`
  margin-left: -15px;
  padding: 0 3px;
  border-radius: 5px;
  transition: box-shadow 200ms;
  cursor: pointer;
  z-index: 10;
  @media ${device.tablet} {
    margin-left: -5px;
  }
  @media ${device.mobileL} {
    margin-left: -15px;
  }
  @media ${device.mobileM} {
    margin-left: -10px;
  }
  @media ${device.mobileS} {
    margin-left: -5px;
  }
  .copy-btn {
    color: ${(props) => props.theme.color};
    width: 20px;
    height: 20px;
  }
  .text {
    opacity: ${(props) => props.show};
    position: absolute;
    margin-left: -100px;
    background: white;
    box-shadow: ${(props) => props.theme.bs};
    border-radius: 5px;
    text-align: center;
    padding: 0 1rem;
    width: 180px;
    font-size: 1.5rem;
    font-family: var(--kanit);
    transition: opacity 800ms ease;
    @media ${device.tablet} {
      margin-left: -130px;
    }
    @media ${device.mobileS} {
      margin-left: -140px;
    }
  }
  span {
    border: 0;
    clip: rect(0000);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0000);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const LineStyle = styled.div`
  margin: 3rem 0 0 0;
  padding: 0.5rem;
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.color};
  text-align: center;

  @media ${device.tablet} {
    width: 96%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 96%;
  }
`;

const LinkStyle = styled.a`
  margin: 1rem 1rem;
  padding: 0.5rem;
  font-family: var(--abril);
  cursor: pointer;
  color: ${(props) => props.theme.color};
  border-radius: 5px;
  &:focus {
    text-decoration: underline;
  }
  @media ${device.tablet} {
    margin: 1rem 0rem;
  }

  @media ${device.mobileL} {
    margin: 1rem 1rem;
  }
  @media ${device.mobileM} {
    margin: 1rem 0.5rem;
  }
  @media ${device.mobileS} {
    margin: 1rem 0;
    padding: 0.3rem;
  }
`;

const MsgStyle = styled.div`
  margin: 2rem 0;
  color: ${(props) => props.theme.color};
  background: white;
  box-shadow: ${(props) => props.theme.bs};
  border-radius: 5px;
  text-align: center;
  padding: 0 1rem;
  background: transparent;
`;
// todo animate in please

export default function Contact() {
  const { theme, text } = useTheme();
  const { inputs, handleChange, resetForm } = useForm({ text: '', email: '' });
  const [show, setShow] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const copyEmail = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const resp = await sendMail(inputs);
    if (!resp.status) {
      console.log(resp.message);
      setError(resp.message);
      setTimeout(() => {
        setError('');
      }, 5000);
      setLoading(false);
    } else {
      // show success and remove loading
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      resetForm();
      setLoading(false);
    }
  }

  return (
    <ContactStackContainer id="contact">
      <H3Styles>{text.contact.heading}</H3Styles>
      <form onSubmit={handleSubmit}>
        <HiddenLabel htmlFor="text">email text </HiddenLabel>
        <TextStyles
          name="text"
          id="text"
          theme={theme}
          placeholder="Message:"
          value={inputs.text}
          onChange={handleChange}
          required
        />

        <HiddenLabel htmlFor="email">email address: </HiddenLabel>
        <EmailStyles
          type="email"
          name="email"
          id="email"
          theme={theme}
          placeholder="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <div>
          <BtnStyles type="button" theme={theme} onClick={resetForm}>
            {text.contact.clearButton}
          </BtnStyles>
          <BtnStyles type="submit" disabled={loading} theme={theme}>
            {text.contact.sendButton}
          </BtnStyles>
        </div>
        {success && (
          <MsgStyle theme={theme}>Message sent - thank you!</MsgStyle>
        )}
        {error && <MsgStyle theme={theme}>Message not sent: {error}</MsgStyle>}
      </form>
      <LineStyle theme={theme}>
        <LinkStyle
          href="https://twitter.com/Mac53637606"
          rel="noreferrer"
          target="_blank"
          theme={theme}
        >
          twitter
        </LinkStyle>
        <LinkStyle
          href="https://www.instagram.com/macbeagan/"
          rel="noreferrer"
          target="_blank"
          theme={theme}
        >
          insta
        </LinkStyle>
        <LinkStyle
          href="https://github.com/cormacbeagan"
          rel="noreferrer"
          target="_blank"
          theme={theme}
        >
          github
        </LinkStyle>
        <LinkStyle theme={theme} href="mailto:cor@macbeagan.me">
          email
        </LinkStyle>
        <CopyStyle
          theme={theme}
          show={show}
          onClick={() => {
            const email = copyEmail.current;
            email.select();
            document.execCommand('copy');
            setShow(1);
            setTimeout(() => {
              setShow(0);
            }, 1500);
          }}
        >
          <span>copy email address to clipboard</span>
          <FaCopy className="copy-btn" />
          <div className="text">Email address copied</div>
        </CopyStyle>
      </LineStyle>
      <input
        aria-hidden="true"
        role="none"
        ref={copyEmail}
        type="text"
        value="cor@macbeagan.me"
        style={{ opacity: '0' }}
        readOnly
      ></input>
    </ContactStackContainer>
  );
}
