
// Modal functionality
function showModal() {
        document.getElementById("modal").style.display = "block";
}

function hideModal() {
        document.getElementById("modal").style.display = "none";
}

document.getElementById("modal").addEventListener("click", function(event) {
        if (event.target == document.getElementById("modal") || event.target.className == "close") {
                hideModal();
        }
}); 

// PDF generation functionalityconst form = document.getElementById('adoption-form');
 // const formData = new FormData(form);

function saveAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  
  const fullName = document.getElementById('full-name').value;
  const address = document.getElementById('address').value;
  const postCode = document.getElementById('post-code').value;
  const contactNumber = document.getElementById('contact-number').value;
  const email = document.getElementById('email').value;
  const childrenAges = document.getElementById('children-ages').value;
  const currentPets = document.getElementById('current-pets').value;
  const fencedYard = document.querySelector('input[name="fenced-yard"]:checked').value;
  const kidsAtHome = document.querySelector('input[name="kids-at-home"]:checked').value;
  const timeWithPup = document.querySelector('input[name="time-with-pup"]:checked').value;
  const previousBulldog = document.querySelector('input[name="previous-bulldog"]:checked').value;
  const previousBulldogCount = document.getElementById('previous-bulldog-count').value;

  doc.text(`Doberman Adoption Application submission form`, 50, 10);
  doc.text(`Full Name: ${fullName}`, 10, 20);
  doc.text(`Address: ${address}`, 10, 30);
  doc.text(`Post Code: ${postCode}`, 10, 40);
  doc.text(`Contact Number: ${contactNumber}`, 10, 50);
  doc.text(`Email Address: ${email}`, 10, 60);
  doc.text(`Children Ages: ${childrenAges}`, 10, 70);
  doc.text(`Current Pets: ${currentPets}`, 10, 80);
  doc.text(`Fenced Yard: ${fencedYard}`, 10, 90);
  doc.text(`Kids at Home: ${kidsAtHome}`, 10, 100);
  doc.text(`Time with Pup: ${timeWithPup}`, 10, 110);
  doc.text(`Previous Bulldog: ${previousBulldog}`, 10, 120);
  doc.text(`Previous Bulldog Count: ${previousBulldogCount}`, 10, 130);
  doc.save('adoption-application.pdf');

  // Create a JSON string from the form data
    var jsonData = JSON.stringify(formData, null, 2); // Indent for readability
  
    // Create a Blob object
    var blob = new Blob([jsonData], { type: 'application/json' });
  
    // Create a temporary URL for the Blob
    var url = URL.createObjectURL(blob);
  
    // Create a hidden anchor element
    var a = document.createElement('a');
    a.href = url;
    a.download = 'adoption_application✔.pdf'; // Set the desired filename
    a.style.display = 'none';
  
    // Trigger a click on the anchor element to download the file
    document.body.appendChild(a);
    a.click();
  
    // Clean up (revoke the URL)
    URL.revokeObjectURL(url);
  }
// but 2

