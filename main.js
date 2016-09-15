let $newContactForm, $newName, $newEmail, $newPhone, $newAddress, $newDob, $newList, $list, editing, $lastRow;

$(document).ready(function() {

  $newContactForm = $('#newContactForm');
  $newName = $('#newName');
  $newEmail = $('#newEmail');
  $newPhone = $('#newPhone');
  $newAddress = $('#newAddress');
  $newDob = $('#newDob');
  $list = $('#list');

  editing = false;

  $('#newContactForm').on('submit', createContact);

  $list.on('click', '.delete', removeContact);
  $list.on('click', '.edit', editContact);

})

// event handler
function createContact(event) {
  event.preventDefault();

  let name = $newName.val();
  let email = $newEmail.val();
  let phone = $newPhone.val();
  let address = $newAddress.val();
  let dob = $newDob.val();

  $newName.val('');
  $newEmail.val('');
  $newPhone.val('');
  $newAddress.val('');
  $newDob.val('');

  let $row = createNewContact(name, email, phone, address, dob);
  $list.append($row);
  $('.modal').modal('hide'); // hide the modal when submit

  console.log('Add Contact clicked!');
  // console.log('name:', name);
  // console.log('email', email);
  // console.log('phone',phone);
  // console.log('address',address);
  // console.log('dob', dob);
}

function createNewContact(name, email, phone, address, dob) {

  let $row = $('#templateRow').clone(); // clone template row
  if (editing) {
    removeContact($lastRow);
  }

  $row.children('.name').text(name);
  $row.children('.email').text(email);
  $row.children('.phone').text(phone);
  $row.children('.address').text(address);
  $row.children('.dob').text(dob);

  $row.removeAttr('id');
  return $row;

}

// delete contact
function removeContact(event) {
  let $target = $(event.target);
  $target.closest('tr').remove();
}

// edit contact
function editContact(event) {
  let $target = $(event.target);
  let $parent = $target.closest('tr');
  $lastRow = event;

  editing = true;
  console.log($target);
  // console.log($target.closest('td.newName'));
  // let me = 'me!'
  let name = $parent.find('td.name').html();
  let email = $parent.find('td.email').html();
  let phone = $parent.find('td.phone').html();
  let address = $parent.find('td.address').html();
  let dob = $parent.find('td.dob').html();

  $newName.val(name);
  $newEmail.val(email);
  $newPhone.val(phone);
  $newAddress.val(address);
  $newDob.val(dob);

  // removeContact(event);

  // console.log('name:', name);
  // console.log('email:', email);
  // console.log('phone:', phone);
  // console.log('address:', address);
  // console.log('dob:', dob);


}
