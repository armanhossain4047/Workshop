const submitBtn = document.getElementById('submit-btn');
      const actionSelect = document.getElementById('action-select');
      const datePicker = document.getElementById('date-picker');
      const attendanceForm = document.getElementById('attendance-form');
    
      submitBtn.addEventListener('click', () => {
        const action = actionSelect.value;
        const date = datePicker.value;
    
        if (!action || !date) {
          alert('Please select an action and a date.');
          return;
        }
    
        // Show the attendance form
        attendanceForm.classList.remove('hidden');
      });

      document.getElementById("allPresent").addEventListener("click", function () {
        document.querySelectorAll('input[value="Present"]').forEach((radio) => {
          radio.checked = true;
        });
      });
    
      // Functionality for "All Absent" button
      document.getElementById("allAbsent").addEventListener("click", function () {
        document.querySelectorAll('input[value="Absent"]').forEach((radio) => {
          radio.checked = true;
        });
      });