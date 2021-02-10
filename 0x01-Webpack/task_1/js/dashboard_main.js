import $ from 'jquery';
import { debounce } from 'lodash';

let count = 0;

$('body').append(
  '<p>Holberton Dashboard</p>',
  '<p>Dashboard data for the students</p>',
  '<button>Click here to get started</button>',
  '<p id="count"></p>',
  '<p>Copyright - Holberton School</p>'
);

const updateCounter = () => (count += 1);

const buttonOnClick = () => {
  const count = updateCounter();
  $('#count').text(`${count} clicks on the button`);
};

$('button').on('click', debounce(buttonOnClick));
