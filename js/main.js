import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://odmendupuvileyrcvffj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kbWVuZHVwdXZpbGV5cmN2ZmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTc2MzYsImV4cCI6MjAyNzM5MzYzNn0.VqXs3v40htCJotNDeMCuGxhbJUTZb1rjNpN85BLBO9g')

console.log(createClient)

let contactFrom = document.querySelector("#contactForm")

let fanme = document.querySelector('[name="fnmae"]')
let lname = document.querySelector('[name="lname"]')
let email = document.querySelector('[name="email"]')
let phone = document.querySelector('[name="phone"]')
let message = document.querySelector('[name="message"]')



contactFrom.addEventListener("submit", async (e) => {
    e.preventDefault()

    console.log(e)

    let data = {
        "First Name": lname.value,
        "Last Name": fanme.value,
        "Phone": +phone.value,
        "Email": email.value,
        "Remark": message.value
    }

    console.log("data : ", data)

    const { error } = await supabase
        .from('gymuser')
        .insert(data)

    if (error) {
        console.log('Error Occured : ', e)
        return
    }

    console.log('Data is inserted !')
})

