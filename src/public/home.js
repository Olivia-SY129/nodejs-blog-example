// @ts-check

const postEl = document.querySelectorAll('.post')
const fakeFormEl = document.querySelectorAll('.fake-form')
const postContentEl = document.querySelectorAll('.post-content')
const updateFormBtnEl = document.querySelectorAll('.update-form-btn')
const updatePostFormEl = document.querySelectorAll('.update-post-form')
const updatePostInputEl = document.querySelectorAll('.update-post-input')
const updatePostBtnEl = document.querySelectorAll('.update-post-btn')

postContentEl.forEach((_, idx) => {
  if (!updatePostInputEl[idx] || !postContentEl[idx]) {
    return
  }

  /** 
  TODO
  - content 글자 수 xx 이상 시 더보기 버튼 추가 -> 새 페이지로 이동 or 현재 페이지에서 늘이기?
   
   */

  fakeFormEl[idx]?.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  updatePostInputEl[idx].value = postContentEl[idx].innerText

  updateFormBtnEl[idx]?.addEventListener('click', () => {
    postEl[idx]?.classList.toggle('hidden')
    updatePostFormEl[idx]?.classList.toggle('hidden')
    updateFormBtnEl[idx]?.classList.toggle('hidden')
  })

  updatePostBtnEl[idx]?.addEventListener('click', () => {
    postEl[idx]?.classList.toggle('hidden')
    updatePostFormEl[idx]?.classList.toggle('hidden')
    updateFormBtnEl[idx]?.classList.toggle('hidden')
  })
})

// 페이지 이동 시 history에 추가함
// 페이지 뒤로가기 시 popstate를 통해 이벤트 감지
// 이때 윈도우 새로고침하여 항상 최신 페이지를 유지함
