/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */

import { getComments, addComment } from './api.js';
import { css, getLoadMoreBtn, getForm } from './template.js';
import $ from './jquery-3.5.1.js';
// let offset = 0;
// let siteKey = '';
// let apiUrl = '';
// let containerElments = null;
// let loadMoreClassName;
// let commentsClassName;
// let formClassName;
// let sendCommentClassName;


export function init(options) {
  // import { getComments, addComment } from './api.js';
  // import {css, getLoadMoreBtn, getForm} from './template.js';
  // import $ from './jquery-3.5.1.js';
  let offset = 0;
  const { siteKey } = options;
  const { apiUrl } = options;
  const loadMoreClassName = `${siteKey}-more`;
  const commentsClassName = `${siteKey}-comment-box`;
  const formClassName = `${siteKey}-add-comment`;
  const sendCommentClassName = `${siteKey}-sendComment`;
  const containerElments = $(options.container);
  containerElments.append(getForm(formClassName, commentsClassName, loadMoreClassName, sendCommentClassName));
  initCSS();
  readMore();
  displayComments();
  $(`.${sendCommentClassName}`).click(() => {
    $(`.${sendCommentClassName}`).addClass('disableBtn');
    if (!checkSpace()) {
      postComment();
    }
  });

  function initCSS() {
    const StyleElement = document.createElement('style');
    StyleElement.type = 'text/css';
    StyleElement.appendChild(document.createTextNode(css));
    document.head.appendChild(StyleElement);
  }
  function checkSpace() {
    const alert = $('.alert-danger');
    if (alert) {
      alert.remove();
    }
    const nickname = $(`.${formClassName} #nickname`).val();
    const content = $(`.${formClassName} #content`).val();
    const template = `<div class="alert alert-danger" role="alert">
                        資料不齊全
                      </div>`;
    if (nickname == '' || content == '') {
      $(template).insertBefore('form');
      return true;
    }
    return false;
  }

  function readMore() {
    $(`.${loadMoreClassName}`).click(() => {
      offset += 5;
      displayComments();
    });
  }

  function clearComments() {
    $(`.${commentsClassName}`).html('');
  }

  function displayComments() {
    const commentBoxDiv = document.querySelector(`.${commentsClassName}`);
    getComments(apiUrl, offset, siteKey, (result) => {
      if (result.length != 0) {
        result.forEach((comment) => {
          const div = document.createElement('div');
          div.classList.add('col-12');
          const template = `
                              <div class="card mb-4">
                                <div class="card-header nickname">作者: ${comment.nickname}<div>留言時間: ${comment.created_at}</div> </div>
                                
                                <div class="card-body">
                                  <p class="card-text comment">
                                    ${comment.content}
                                  </p>
                                </div>
                              </div>
                          `;
          div.innerHTML = template;
          commentBoxDiv.appendChild(div);
        });
      } else {
        $(`.${loadMoreClassName}`).remove();
      }
    });
  }

  function postComment() {
    const nickname = $(`.${formClassName} #nickname`).val();
    const content = $(`.${formClassName} #content`).val();
    const data = {
      nickname,
      content,
      site_key: siteKey,
    };
    console.log(data);
    addComment(apiUrl, data, () => {
      const Rbtn = $(`.${loadMoreClassName}`);
      if (!Rbtn.length) {
        const readMoreBtn = `<button type="button" class="btn btn-primary ${loadMoreClassName}">載入更多</button>`;
        $(readMoreBtn).insertAfter(`.${commentsClassName}`);
        readMore();
      }
      clearComments();
      offset = 0;
      displayComments();
      setTimeout(() => {
        $(`.${sendCommentClassName}`).removeClass('disableBtn');
      }, 3000);
    });
  }
}
