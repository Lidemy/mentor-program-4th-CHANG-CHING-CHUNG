function handleSubmit(e, state, setErr) {
  const { nickName, email, phone, type, how, others } = state;

  setErr((prev) => ({
    ...prev,
    isNicknameEmpty: false,
    isEmailEmpty: false,
    isEmailError: false,
    isPhoneEmpty: false,
    isPhoneError: false,
    isTypeEmpty: false,
    isHowEmpty: false,
  }));
  function error(inpuType, type = null) {
    if (inpuType === "nickname") {
      if (type === "empty") {
        setErr((prev) => ({
          ...prev,
          isNicknameEmpty: true,
        }));
      }
    }
    if (inpuType === "email") {
      if (type === "empty") {
        setErr((prev) => ({
          ...prev,
          isEmailEmpty: true,
          isEmailError: false,
        }));
      } else {
        setErr((prev) => ({
          ...prev,
          isEmailError: true,
          isEmailEmpty: false,
        }));
      }
    }

    if (inpuType === "phone") {
      if (type === "empty") {
        setErr((prev) => ({
          ...prev,
          isPhoneEmpty: true,
          isPhoneError: false,
        }));
      } else {
        setErr((prev) => ({
          ...prev,
          isPhoneError: true,
          isPhoneEmpty: false,
        }));
      }
    }

    if (inpuType === "how") {
      if (type === "empty") {
        setErr((prev) => ({
          ...prev,
          isHowEmpty: true,
        }));
      }
    }

    if (inpuType === "type") {
      if (type === "empty") {
        setErr((prev) => ({
          ...prev,
          isTypeEmpty: true,
        }));
      }
    }
  }
  function inputValidation() {
    const mailRG = /^.+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i;
    const phoneRG = /^(09)[0-9]{8}$/;

    let invalid = false;
    if (nickName === "") {
      invalid = true;
      error("nickname", "empty");
    }
    if (email === "") {
      invalid = true;
      error("email", "empty");
    } else if (!email.match(mailRG)) {
      invalid = true;
      error("email");
    }
    if (phone === "") {
      invalid = true;
      error("phone", "empty");
    } else if (!phoneRG.test(phone)) {
      invalid = true;
      error("phone");
    }
    if (how === "") {
      invalid = true;
      error("how", "empty");
    }
    if (!type) {
      invalid = true;
      error("type", "empty");
    }
    return invalid;
  }

  if (inputValidation()) {
    e.preventDefault();
    return;
  } else {
    alert(`
    暱稱：${nickName}
    電子郵件：${email}
    手機號碼：${phone}
    類型：${type}
    怎麼知道這個活動的？：${how}
    其他：${others}
    `);
    e.preventDefault();
  }
}

function handleChange(e, setState) {
  if (e.target.classList.contains("name")) {
    setState((prev) => ({
      ...prev,
      nickName: e.target.value,
    }));
  }
  if (e.target.classList.contains("email")) {
    setState((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  }
  if (e.target.classList.contains("phone")) {
    setState((prev) => ({
      ...prev,
      phone: e.target.value,
    }));
  }
  if (e.target.classList.contains("type1")) {
    setState((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  }
  if (e.target.classList.contains("type2")) {
    setState((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  }
  if (e.target.classList.contains("how")) {
    setState((prev) => ({
      ...prev,
      how: e.target.value,
    }));
  }
  if (e.target.classList.contains("others")) {
    setState((prev) => ({
      ...prev,
      others: e.target.value,
    }));
  }
}

export { handleSubmit, handleChange };
