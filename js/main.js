import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://odmendupuvileyrcvffj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kbWVuZHVwdXZpbGV5cmN2ZmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTc2MzYsImV4cCI6MjAyNzM5MzYzNn0.VqXs3v40htCJotNDeMCuGxhbJUTZb1rjNpN85BLBO9g')

console.log(createClient)

let fanme = document.querySelector('[name="fnmae"]')
let lname = document.querySelector('[name="lname"]')
let email = document.querySelector('[name="email"]')
let phone = document.querySelector('[name="phone"]')
let address = document.querySelector('[name="address"]')
let age = document.querySelector('[name="age"]')
let gender = document.querySelector('[name="gender"]')
let memtype = document.querySelector('[name="memtype"]')
let jdate = document.querySelector('[name="jdate"]')
let edate = document.querySelector('[name="edate"]')
let message = document.querySelector('[name="message"]')

document.querySelector("#contactForm").addEventListener("submit", async(e) => {
    e.preventDefault()

    console.log(e)

    let data = {
    "First Name": fanme.value,
    "Last Name": lname.value,
    "Email": email.value,
    "Phone": +phone.value,
    "Address": address.value,
    "Age": +age.value,
    "Gender": null,
    "MembershipType": null, 
    "JoinDate": null,
    "MembershipExpiry": null,
    "Remark": message.value
    }

    console.log(data)

    // let data = {
    //     lname,
    //     fanme,
    //     phone,
    //     address,
    //     age,
    //     address,
    //     gender,
    //     email,
    //     memtype,
    //     jdate,
    //     edate,
    //     message
    // }

    const { error } = await supabase
        .from('gymuser')
        .insert(data)

    if (error) {
        console.log('Error Occured : ', error)
        return
    }

    console.log('Data is inserted !')
})