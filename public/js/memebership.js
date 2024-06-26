import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://odmendupuvileyrcvffj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kbWVuZHVwdXZpbGV5cmN2ZmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTc2MzYsImV4cCI6MjAyNzM5MzYzNn0.VqXs3v40htCJotNDeMCuGxhbJUTZb1rjNpN85BLBO9g');

(() => {
    console.log("hit Js")

    // present the membership details into page
    const renderData = (data) => {
        console.log("The Data : ", data)
        data.forEach(el => {
            console.log(el)
            let tr = document.createElement('tr')
            tr.innerHTML = `
                    <td>${el.Membership_id}</td>
                    <td>${el.PlanName}</td>
                    <td>${el.price}</td>
                    <td>
                        <a href="./JoinNow.html" class="btn">Join Now</a>
                    </td>
           `

            console.log(tr)
            document.querySelector("#tbody").appendChild(tr)
        })
        // data.forEach(element => {
        //     console.log(element)
        //     let tr = document.createElement('tr').innerHTML = `
        //             <td>${element.PlanID}</td>
        //             <td>${element.PlanName}</td>
        //             <td>${element.price}</td>
        //             <td>
        //                 <button class="btn">Join Now</button>
        //             </td>
        //    `

        //     document.querySelector('tbody').appendChild(tr)
        // });
    }

    // fetch the data from the database
    const fetchData = async () => {
        try {

            let { data, error } = await supabase
                .from('membershipplans')
                .select('*')
            
                // SELECT * FROM membershipplans

            console.log(data)

            if (error) {
                console.log('Error Occured : ', e)
                return
            }

            renderData(data)

            return data
        } catch (e) {

        }
    }

    fetchData()

})()
