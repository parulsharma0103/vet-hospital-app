// Pseudocode for appointment process
// 1. Get user input for pet info and appointment date.
// 2. Check if the date is available.
// 3. If available, confirm the appointment and store the data.
// 4. Send a reminder if the appointment is within 24 hours.

// Example: Pet profile and appointment


console.log("vet hospital app code examples");

// Step 1: Organization and Time Management
// Plan Appointment Flow:
// Users can book an appointment.


// Check availability before confirming.


// Send reminders for upcoming appointments.

let petProfile = {
    name: "Buddy",
    species: "Dog",
    age: 3
  };
  
  let availableDates = ["2025-04-01", "2025-04-03", "2025-04-05"];
  let selectedDate = "2025-04-03"; // User input
  
  // Check if selected date is available
  if (availableDates.includes(selectedDate)) {
    console.log(`✅ Appointment booked for ${petProfile.name} on ${selectedDate}`);
  } else {
    console.log("❌ Date not available. Please choose another date.");
  }

//   Step 2: Values, Data Types, and Operations
//     Store and Modify Pet Info:
//     Store pet data as an object.


// Use numbers for age and strings for name and species.
// Pet profile with basic info
let pet1 = {
  name: "Bella",
  species: "Cat",
  age: 2
};

// Update pet's age after a year
pet1.age += 1;
console.log(`${pet1.name} is now ${pet1.age} years old!`);

// Step 3: Stringing Characters Together
// Confirmation Message:
// Create a success message after booking.
let ownerName = "Alex";
let petName = "Buddy";
let appointmentDate = "2025-04-03";

// Create confirmation message
let confirmationMessage = `Hello ${ownerName}, your appointment for ${petName} is confirmed on ${appointmentDate}.`;
console.log(confirmationMessage);

//  Step 4: Control Structures and Logic
// Send Reminder:
// Check if the appointment is in 1 day and send a reminder.
let daysUntilAppointment = 1;

// Check if appointment is within 24 hours
if (daysUntilAppointment === 1) {
  console.log("⏰ Reminder: You have an appointment tomorrow!");
} else {
  console.log("No reminders needed yet.");
}


// Step 5: Working with Loops
// Display Past Appointments:
// Loop through past appointments and display them.
let pastAppointments = ["2025-01-05", "2025-02-10", "2025-03-15"];

// Loop through past appointments
for (let i = 0; i < pastAppointments.length; i++) {
  console.log(`Past appointment on: ${pastAppointments[i]}`);
}

// Step 6: Building and Using Arrays
// Store and Access Appointment Info:
// Store multiple appointments in an array.
let appointments = [
  { petName: "Buddy", date: "2025-04-03" },
  { petName: "Bella", date: "2025-04-05" }
];

// Access and display appointment details
for (let i = 0; i < appointments.length; i++) {
  console.log(`${appointments[i].petName} has an appointment on ${appointments[i].date}`);
}

