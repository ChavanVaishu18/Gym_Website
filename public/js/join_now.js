import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://odmendupuvileyrcvffj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kbWVuZHVwdXZpbGV5cmN2ZmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MTc2MzYsImV4cCI6MjAyNzM5MzYzNn0.VqXs3v40htCJotNDeMCuGxhbJUTZb1rjNpN85BLBO9g');


(() => {
    // 
    let contact_form = document.querySelector("#contact_form")
    let msg = document.querySelector("#msg")
    let _membership = document.querySelector('[id="Membership Type"]')

    // add the membership detail in the form
    function addMembership(data) {
        data.forEach(el => {
            let option = document.createElement("option")
            option.value = el.PlanName
            option.textContent = el.PlanName
            _membership.appendChild(option)
        })
    }

    // Assuming you have a FormEvent object named 'event'
    function getAllFormData(event) {
        let formData = {};
        const form = event.target; // Assuming 'event' is a submit event

        for (const element of form.elements) {
            if (element.tagName.toLowerCase() !== 'button' && element.name) {
                formData[element.name] = element.value;
            }
        }

        return formData;
    }

    contact_form.addEventListener("submit", async (e) => {
        e.preventDefault()

        const formData = getAllFormData(event);
        console.log(formData);
        let finalData = {
            "First Name": formData.firstname,
            "Last Name": formData.lastname,
            "Email": formData.Email,
            "Phone": +formData.phone,
            "Address": formData.Address,
            "Age": +formData.Age,
            "Gender": formData.Gender,
            "MembershipType": formData['Select Membership Type'],
            "JoinDate": formData['Join Date'],
            "MembershipExpiry": formData['Expiry Date'],
            "Remark": formData.message
        };

        // sending data to database
        let { data, error } = await supabase.from("gymuser").insert(finalData)

        // INSERT DATA INTO gymuser VALUES (".......")

        if(!error) {
            console.log("User add successfully!")

            msg.innerText = "Thanks for registration"
            return
        }

        msg.innerText = "Something Went Wrong"

    })

    // supabase.from('gymuser').select('*').then(result => {
    //     console.log(result.data[0])
    // })

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

            addMembership(data)

            return data
        } catch (e) {

        }
    }

    fetchData()

})()