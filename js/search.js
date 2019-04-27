$(function () {
	$('#searchBar').keyup(function () {
		var searchText = $( this ).val().toLowerCase();
		if (searchText === '') {
			$('.image').show();
		} else {
			$('.image').each(function () {
				var txtInfo = $( this ).data('title').toLowerCase();
				if (txtInfo.includes(searchText)) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
	});
});