function convertToHebrew() {
    const gregorianDateInput = document.getElementById('gregorian-date');
    const gregorianDate = gregorianDateInput.value;
    const apiUrl = `https://www.hebcal.com/converter?cfg=json&date=${gregorianDate}&g2h=1&strict=1`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        const hebrewDateElement = document.getElementById('hebrew-date');
        const hebrewDate = data.hebrew;
        hebrewDateElement.textContent = `Hebrew Date: ${hebrewDate}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  