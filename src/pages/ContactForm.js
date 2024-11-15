import React, { useState, useRef, useEffect } from 'react';
import Toast from '../components/Toast';
import './ContactForm.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';
import { PhoneNumberUtil, PhoneNumberFormat, PhoneNumberType } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const getCountryFromLanguage = () => {
  const language = navigator.language || navigator.userLanguage;
  const languageCode = language.split('-')[0];
  const countryMap = {
    ko: 'kr',
    en: 'us',
    ja: 'jp',
    zh: 'cn',
  };
  return countryMap[languageCode] || 'kr';
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: getCountryFromLanguage(),
    message: '',
    service: '서비스 문의'
  });
  const [errorFields, setErrorFields] = useState({});
  const [showErrorBorder, setShowErrorBorder] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [phonePlaceholder, setPhonePlaceholder] = useState('전화번호를 입력하세요');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRefs = {
    name: useRef(),
    company: useRef(),
    email: useRef(),
    phone: useRef(),
    message: useRef()
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message' && value.length > 2000) {
      return;
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setErrorFields(prev => ({
      ...prev,
      [name]: false
    }));
  };

  const handlePhoneChange = (value, country) => {
    console.log(`handlePhoneChange called: value = ${value}, country = ${country.countryCode}`);
    setFormData(prevData => ({
      ...prevData,
      phone: value,
      country: country.countryCode,
    }));
    setErrorFields(prev => ({
      ...prev,
      phone: false,
    }));

    if (value === '') {
      setPhonePlaceholder('전화번호를 입력하세요');
      return;
    }

    try {
      const exampleNumber = phoneUtil.getExampleNumberForType(
        country.countryCode.toUpperCase(),
        PhoneNumberType.MOBILE
      );
      const formattedPlaceholder = phoneUtil.format(exampleNumber, PhoneNumberFormat.NATIONAL);
      setPhonePlaceholder(formattedPlaceholder);
    } catch (error) {
      console.error('예시 번호를 가져오는 중 오류 발생:', error);
      setPhonePlaceholder('전화번호를 입력하세요');
    }
  };

  const validateForm = () => {
    const fields = [
      { name: 'name', label: '이름' },
      { name: 'company', label: '회사명' },
      { name: 'email', label: '이메일' },
      { name: 'phone', label: '휴대폰 번호' },
      { name: 'message', label: '문의 내용' }
    ];

    let newErrorFields = {};
    let isValid = true;

    for (let field of fields) {
      if (!formData[field.name].trim()) {
        setToastMessage(`${field.label}을(를) 입력해주세요.`);
        newErrorFields[field.name] = true;
        inputRefs[field.name]?.current?.focus();
        isValid = false;
        break;
      }
    }

    if (isValid && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setToastMessage('올바른 이메일 형식이 아닙니다.');
      newErrorFields.email = true;
      inputRefs.email.current.focus();
      isValid = false;
    }

    setErrorFields(newErrorFields);
    setShowErrorBorder(newErrorFields);

    setTimeout(() => {
      setShowErrorBorder({});
    }, 3000);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const templateParams = {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service: formData.service
        };

        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );

        setToastMessage('문의가 성공적으로 제출되었습니다.');
        setShowToast(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          service: '서비스 문의'
        });
      } catch (error) {
        console.error('문의 제출 중 오류 발생:', error);
        setToastMessage('문의 제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
        setShowToast(true);
      } finally {
        setIsSubmitting(false);
      }
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const charCount = formData.message.length;
  const isExceeded = charCount > 2000;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    try {
      const exampleNumber = phoneUtil.getExampleNumberForType('KR', PhoneNumberType.MOBILE);
      const formattedPlaceholder = phoneUtil.format(exampleNumber, PhoneNumberFormat.NATIONAL);
      setPhonePlaceholder(formattedPlaceholder);
    } catch (error) {
      console.error('초기 예시 번호를 가져오는 중 오류 발생:', error);
      setPhonePlaceholder('010-1234-5678'); // 한국 번호 형식의 기본값
    }
  }, []);

  useEffect(() => {
    console.log('formData updated:', formData);
  }, [formData]);

  return (
    <div className="contact-page">
      {showToast && <Toast message={toastMessage} />}
      <div className="contact-content">
        <div className="contact-text">
          <h1>어떤 질문도 <br />위스퍼가 답변해드릴게요</h1>
          <p className="subtitle">
            아래와 같은 궁금한 점을 모두 질문하세요.<br />
            영업팀이 메일 또는 전화로 제품에 대해 자세히 알드립니다.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            ref={inputRefs.name}
            className={showErrorBorder.name ? 'error' : ''}
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="회사명"
            ref={inputRefs.company}
            className={showErrorBorder.company ? 'error' : ''}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
            ref={inputRefs.email}
            className={showErrorBorder.email ? 'error' : ''}
          />
          <PhoneInput
            key={phonePlaceholder}
            country={formData.country}
            value={formData.phone}
            onChange={(value, country, e, formattedValue) => {
              console.log('PhoneInput onChange:', value, country, formattedValue);
              handlePhoneChange(value, country);
            }}
            onKeyDown={(e) => {
              if (e.key >= '0' && e.key <= '9') {
                const newValue = formData.phone + e.key;
                handlePhoneChange(newValue, { countryCode: formData.country });
              } else if (e.key === 'Backspace') {
                const newValue = formData.phone.slice(0, -1);
                handlePhoneChange(newValue, { countryCode: formData.country });
              }
            }}
            placeholder={phonePlaceholder}
            inputProps={{
              name: 'phone',
              required: true,
              ref: inputRefs.phone,
            }}
            containerClass={`phone-input-container ${showErrorBorder.phone ? 'error' : ''}`}
            inputClass="phone-input"
            enableSearch={true}
            disableSearchIcon={true}
            disableCountryCode={true}
            countryCodeEditable={false}
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="서비스 문의">서비스 문의</option>
            <option value="기술 문의">기술 문의</option>
            <option value="기타 문의">기타 문의</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="문의 내용"
            ref={inputRefs.message}
            className={showErrorBorder.message ? 'error' : ''}
          ></textarea>
          <div className={`char-count ${isExceeded ? 'exceed' : ''}`}>
            {charCount}/2000
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '제출 중...' : '문의 제출하기'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
