import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';

// window.addEventListener('load', () => {...})
// or with jQuery
$(() => {
  const appUl = $("#app ul");

  const appendTodoToUl = function(texts, ul, noUnderline = false) {
    const items = [texts]
      .flat()
      .filter(Boolean)
      .map((text, i) => {
        let className = "green-text";
        if (text.length > 4) {
          className = "yellow-text";
        }
        if (text.length >= 8) {
          className = "red-text";
        }

        return $("<li>")
          .text(text)
          .css({ fontSize: 15 + i * 5 })
          .addClass(className)
          .append(
            $("<button>")
              .text("X")
              .on("click", function(e) {
                // Remove parent without jQuery
                // e.target.parentNode.remove()
                console.log(this === e.target); // true because of the normal function
                const li = $(this).parent()

                li.animate({opacity: 0, marginLeft: '20px'}, 1000, () => {
                    // remove after the animation completed
                    li.remove();
                })
              })
          );
      });

    $(ul).append(items);
  };

  appendTodoToUl(
    ["Mohammed", "Ali", "Shakhawan", "Najiba", null, "", undefined, "Omar"],
    appUl,
    true
  );

  const newTodoText = $("#todoText");

  $('#addBtn').on("click", () => {
    const text = newTodoText.val();
    newTodoText.val('');

    appendTodoToUl(text, appUl);

    $('li').each((i, el) => {
        console.log(el)
    });

    // same work, but el and i replaced
    Array.prototype.slice.call($('li')).forEach((el, i) => {
        console.log(el)
    })
  });


  $('#data-table').on('click', '.delete-btn', e => {
    $(e.target).closest('tr').remove();
  })

  $('#data-table').on('click', '.edit-btn', e => {
    console.log('edit')
  })

  $('#data-table').append(`<tr>
  <td>Mohammed</td>
  <td>mail@mail.com</td>
  <td>
      <button class="delete-btn btn btn-danger">Delete</button>
      <button class="edit-btn btn btn-warning">Edit</button>
  </td>
</tr>

<tr>
  <td>Shakhawan</td>
  <td>shak@mail.com</td>
  <td>
      <button class="delete-btn btn btn-danger">Delete</button>
      <button class="edit-btn btn btn-warning">Edit</button>
  </td>
</tr>`)

  $('#data-table').append(`<tr>
  <td>Mohammed</td>
  <td>mail@mail.com</td>
  <td>
      <button class="delete-btn btn btn-danger">Delete</button>
      <button class="edit-btn btn btn-warning">Edit</button>
  </td>
</tr>

<tr>
  <td>Shakhawan</td>
  <td>shak@mail.com</td>
  <td>
      <button class="delete-btn btn btn-danger">Delete</button>
      <button class="edit-btn btn btn-warning">Edit</button>
  </td>
</tr>`)
});