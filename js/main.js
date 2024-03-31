import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://odmendupuvileyrcvffj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kbWVuZHVwdXZpbGV5cmN2ZmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTc2MzYsImV4cCI6MjAyNzM5MzYzNn0.VqXs3v40htCJotNDeMCuGxhbJUTZb1rjNpN85BLBO9g')

console.log(createClient)

let fanme = document.querySelector('[name="fnmae"]').value
let lname = document.querySelector('[name="lname"]').value
let email = document.querySelector('[name="email"]').value
let phone = document.querySelector('[name="phone"]').value
let address = document.querySelector('[name="address"]').value
let age = document.querySelector('[name="age"]').value
let gender = document.querySelector('[name="gender"]').value
let memtype = document.querySelector('[name="memtype"]').value
let jdate = document.querySelector('[name="jdate"]').value
let edate = document.querySelector('[name="edate"]').value
let message = document.querySelector('[name="message"]').value

document.querySelector("#contactForm").addEventListener("submit", async(e) => {
    e.preventDefault()

    console.log(e)

    let data = {
        lname,
        fanme,
        phone,
        address,
        age,
        address,
        gender,
        email,
        memtype,
        jdate,
        edate,
        message
    }

    const { error } = await supabase
        .from('gymuser')
        .insert(data)

    if (error) {
        console.log('Error Occured : ', error)
        return
    }

    console.log('Data is inserted !')
})

