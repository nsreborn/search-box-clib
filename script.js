document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var searchQuery = encodeURIComponent(document.getElementById('searchQuery').value.trim());
    var selectedEngine = document.getElementById('searchEngine').value;

    var searchUrl;

    switch (selectedEngine) {
        case 'opac':
            searchUrl = 'https://opac.psu.ac.th/BibList.aspx?word=' + searchQuery + '&type=all=&log=true';
            break;
        case 'eds':
            searchUrl = 'https://widgets.ebscohost.com/prod/search/index-sbb2.php?interface=eds&custid=s3150751&groupid=main&profid=eds&site=eds&bquery=' + searchQuery + '&authtype=ip,guest,uid';
            break;
        case 'pulinet':
            searchUrl = 'https://search.ebscohost.com/login.aspx?direct=true&site=eds&bquery=' + searchQuery + '&scope=site&authtype=ip,guest&custid=s3150751&groupid=main&profile=ill&defaultdb=&option=1&Search=Search';
            break;
        default:
            break;
    }

    if (searchUrl) {
        window.open(searchUrl, '_blank');
    }
});
