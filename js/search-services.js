function saveService() {
    const search_select = document.getElementById('search_select').value;
    localStorage.setItem('search-service', search_select);
}