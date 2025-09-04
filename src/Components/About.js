import React from 'react'

export default function About() {
  return (
    <section id="about" class="py-5 bg-light">
  <div class="container">
    <div class="row align-items-center">
      
      
      <div class="col-md-6 mb-4 mb-md-0">
        <img 
          src="logo12.png" 
          alt="About Image" 
          class="img-fluid w-75 rounded-circle shadow"
        />
      </div>

      
      <div class="col-md-6">
        <h2 class="mb-4">About Our Expense Tracker</h2>
        
        <p class="lead text-muted">
          Our Expense Tracker app helps you manage your money with ease. 
          Track your expenses, analyze reports, and gain valuable insights 
          into your spending habits.
        </p>

        <p class="text-muted">
          Whether you’re handling personal finances or managing business 
          budgets, our tools are designed to make expense tracking simple, 
          intuitive, and efficient. Join thousands of users who trust us 
          to keep their financial life organized.
        </p>

        <ul class="list-unstyled text-start">
          <li class="mb-2">
            ✅ Easy expense tracking
          </li>
          <li class="mb-2">
            ✅ Detailed reports & analytics
          </li>
          <li class="mb-2">
            ✅ User-friendly interface
          </li>
          <li class="mb-2">
            ✅ Secure data management
          </li>
        </ul>

        <a href="/" class="btn btn-primary mt-3">
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>

  )
}
