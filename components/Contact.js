import { useRef, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import styled from 'styled-components';
import { sendMail } from '../utils/email';
import { useTheme } from '../utils/themeState';
import { useDimensionSetter } from '../utils/useDimensionSetter';
import useForm from '../utils/useForm';
import ArticleDisplay from './ArticleDisplay';
import BtnStyles from './styles/BtnStyles';
import SelectNonList from './styles/SelectNonList';
import { device } from './styles/sizes';

const ContactContainer = styled.div`
  margin: 0 auto 0 0;
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.laptop} {
    width: 45rem;
  }
  @media ${device.tablet} {
    width: 100%;
    align-items: flex-end;
    margin: 7rem 0 0 0;
  }
  @media ${device.mobileL} {
    min-height: 40rem;
    margin: 7rem 0 0 0;
    width: 100%;
  }
  @media ${device.mobileM} {
    margin: 3rem 0 0 0;
    width: 100%;
  }
  @media (max-height: 470px) {
    margin: 1.5rem 0 0 0;
  }
`;

const H2Styles = styled.h3`
  margin: 0.5rem;
  font-family: var(--oleo);
  font-size: 3rem;
`;

const TextStyles = styled.textarea`
  width: 90%;
  height: ${(props) => (props.height < 490 ? '8rem' : '15rem')};
  padding: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.bs};
  font-family: var(--kanit);
  font-size: 2rem;
  text-align: inherit;
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
  text-align: inherit;
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
    margin: 1rem 0.3rem;
  }
  @media ${device.mobileS} {
    margin: 1rem 0;
    padding: 0.3rem;
  }
`;

const MsgStyle = styled.div`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.color};
  background: white;
  box-shadow: ${(props) => props.theme.bs};
  border-radius: 5px;
  text-align: center;
  padding: 0 1rem;
  background: transparent;
  height: ${(props) => (props.show ? '3rem' : '0')};
  opacity: ${(props) => (props.show ? '1' : '.5')};
  overflow: hidden;
  transition: all 800ms ease;
`;

export default function Contact() {
  const { theme, text } = useTheme();
  const { inputs, handleChange, resetForm } = useForm({ text: '', email: '' });
  const [show, setShow] = useState(0);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const copyEmail = useRef();
  const [showMsg, setShowMsg] = useState(false);
  const { width, height } = useDimensionSetter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const resp = await sendMail(inputs);
    if (!resp.status) {
      setMsg(resp.message);
      setShowMsg(true);
      setTimeout(() => {
        setMsg('');
        setShowMsg(false);
      }, 5000);
      setLoading(false);
    } else {
      setShowMsg(true);
      setMsg('Message sent - thank you');
      setTimeout(() => {
        setMsg('');
        setShowMsg(false);
      }, 5000);
      resetForm();
      setLoading(false);
    }
  }

  return (
    <>
      <SelectNonList flip>
        <h2>contact</h2>
      </SelectNonList>
      <ArticleDisplay flip unflip>
        <ContactContainer>
          <H2Styles>{text.contact.heading}</H2Styles>
          <form onSubmit={handleSubmit}>
            <label htmlFor="text" className="accessibly-hidden">
              Enter message text{' '}
            </label>
            <TextStyles
              name="text"
              id="text"
              theme={theme}
              placeholder="Message:"
              value={inputs.text}
              onChange={handleChange}
              height={height}
              required
            />

            <label htmlFor="email" className="accessibly-hidden">
              Enter your email address:{' '}
            </label>
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
            <MsgStyle theme={theme} show={showMsg}>
              {msg}
            </MsgStyle>
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
              <span className="accessibly-hidden">
                copy email address to clipboard
              </span>
              <FaCopy className="copy-btn" />
              <div className="text">Email address copied</div>
              <label className="accessibly-hidden">
                My contact email:
                <input
                  className="accessibly-hidden"
                  ref={copyEmail}
                  name="email address"
                  type="text"
                  value="cor@macbeagan.me"
                  readOnly
                ></input>
              </label>
            </CopyStyle>
          </LineStyle>
        </ContactContainer>
      </ArticleDisplay>
    </>
  );
}
