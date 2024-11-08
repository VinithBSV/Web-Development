const friends = document.querySelectorAll('.friend');
    const dropZone = document.getElementById('dropZone');

    friends.forEach(friend => {
      friend.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', friend.outerHTML);
        friend.classList.add('dragging');
      });

      friend.addEventListener('dragend', () => {
        friend.classList.remove('dragging');
      });
    });

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = '#333';
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.style.borderColor = '#aaa';
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = '#aaa';

      // Parse the dropped HTML and add a remove button to it
      const droppedHTML = e.dataTransfer.getData('text/plain');
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = droppedHTML;

      const droppedFriend = tempDiv.firstChild;
      addRemoveButton(droppedFriend);

      // Append to drop zone
      dropZone.appendChild(droppedFriend);
    });

    // Function to add remove button
    function addRemoveButton(friendElement) {
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.onclick = () => friendElement.remove();
      friendElement.appendChild(removeBtn);
    }

    // Filter functionality
    function applyFilters() {
      const locationFilter = document.getElementById('locationFilter').value;
      const jobFilter = document.getElementById('jobFilter').value;

      friends.forEach(friend => {
        const matchesLocation = !locationFilter || friend.getAttribute('data-location') === locationFilter;
        const matchesJob = !jobFilter || friend.getAttribute('data-job') === jobFilter;
        friend.style.display = matchesLocation && matchesJob ? 'block' : 'none';
      });
    }