let i = 0
let feedbacks = [
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Peter Jones",
    job: "INTERN",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Bill Anderson",
    job: "THE BOSS",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
  }
]

const feedbackBox = document.getElementById("feedback-box")
const previousBtn = document.getElementById("previous-btn")
const nextBtn = document.getElementById("next-btn")
const surpriseBtn = document.getElementById("surprise-btn")
previousBtn.addEventListener("click", previousReview)
nextBtn.addEventListener("click", nextReview)
surpriseBtn.addEventListener("click", randomReview)

function renderReview() {
  let feedback = feedbacks[i]

  feedbackBox.innerHTML = `
            <div ><img class="feedback-box__image" src="${feedback.image}" alt="" /></div>
            <div class="feedback-box__name">${feedback.name}</div>
            <div class="feedback-box__job">${feedback.job}</div>
            <div class="feedback-box__text">${feedback.text}</div>`
}
renderReview()

function nextReview() {
  i += 1

  if (i === feedbacks.length) {
    i = 0
  }
  renderReview()
}
function previousReview() {
  i -= 1

  if (i === -1) {
    i = feedbacks.length - 1
  }
  renderReview()
}

function randomReview() {
  let randomIndex = Math.floor(Math.random() * feedbacks.length)
  i = randomIndex
  renderReview()
}
