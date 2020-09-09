/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
$(document).ready(() => {
  let offset = 0;

  function checkSpace() {
    const alert = $('.alert-danger');
    if (alert) {
      alert.remove();
    }
    const nickname = $('#nickname').val();
    const content = $('#content').val();
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
    $('.more').click(() => {
      offset += 5;
      displayComments();
    });
  }

  function clearComments() {
    $('.comment-box').html('');
  }

  function displayComments() {
    const commentBoxDiv = document.querySelector('.comment-box');
    const dataoffset = offset;
    $.get(`http://localhost/v1-week12-board/api/comments.php?offset=${dataoffset}`, (result) => {
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
        $('.more').remove();
      }
    });
  }

  function postComment() {
    const nickname = $('#nickname').val();
    const content = $('#content').val();
    const data = {
      nickname,
      content,
    };
    $.post('http://localhost/v1-week12-board/api/add_comment.php', data)
      .always(() => {
        const Rbtn = $('.more');
        if (!Rbtn.length) {
          const readMoreBtn = '<button type="button" class="btn btn-primary more">載入更多</button>';
          $(readMoreBtn).insertAfter('.comment-box');
          readMore();
        }
        clearComments();
        offset = 0;
        displayComments();
        setTimeout(() => {
          $('.sendComment').removeClass('disableBtn');
        }, 3000);
      });
  }


  readMore();
  displayComments();
  $('.sendComment').click(() => {
    $('.sendComment').addClass('disableBtn');
    if (!checkSpace()) {
      postComment();
    }
  });
});
