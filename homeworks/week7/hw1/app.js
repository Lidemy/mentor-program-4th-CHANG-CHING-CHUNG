/* eslint-disable consistent-return */
/* eslint-disable no-alert */
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputHow = document.getElementById('how');
const inputType = document.getElementById('type');
const inputRadio1 = document.getElementById('type1');
const inputRadio2 = document.getElementById('type2');
const inputOther = document.getElementById('others');
const submitBtn = document.getElementById('submit');

inputRadio1.checked = false;
inputRadio2.checked = false;

function error(inputField, inpuType) {
  const parent = inputField.parentElement;
  const div = document.createElement('div');
  if (inpuType === 'email') {
    div.textContent = '輸入請符合電子郵件格式!';
  } else if (inpuType === 'phone') {
    div.textContent = '請輸入10位數手機號碼!';
  } else {
    div.textContent = '必填項目不得為空!';
  }
  div.classList.add('error');
  parent.appendChild(div);
}
function inputValidation() {
  const mailRG = /^.+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i;
  const phoneRG = /^[0-9]{10}$/;
  let invalid = false;
  if (inputName.value === '') {
    invalid = true;
    error(inputName);
  } if (inputEmail.value === '') {
    invalid = true;
    error(inputEmail);
  } else if (!inputEmail.value.match(mailRG)) {
    invalid = true;
    error(inputEmail, 'email');
  } if (inputPhone.value === '') {
    invalid = true;
    error(inputPhone);
  } else if (!phoneRG.test(inputPhone.value)) {
    invalid = true;
    error(inputPhone, 'phone');
  } if (inputHow.value === '') {
    invalid = true;
    error(inputHow);
  } if (!inputRadio1.checked && !inputRadio2.checked) {
    invalid = true;
    error(inputType);
  }
  return invalid;
}


document.querySelector('#form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const errs = Array.from(document.getElementsByClassName('error'));
    if (errs.length) {
      errs.forEach((err) => {
        err.remove();
      });
    }
    if (inputValidation()) {
      return 0;
    }
    let type;
    if (inputRadio1.checked) {
      type = inputRadio1.value;
    } else if (inputRadio2.checked) {
      type = inputRadio2.value;
    }
    alert(`
    暱稱：${inputName.value}
    電子郵件：${inputEmail.value}
    手機號碼：${inputPhone.value}
    類型：${type}
    怎麼知道這個活動的？：${inputHow.value}
    其他：${inputOther.value}
    `);
  });
