const template = document.createElement('template');
template.innerHTML = `
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


<div>
<div class="alert alert-primary" role="alert">
</div>

<div class="alert alert-danger" role="alert">
    <p>
        <slot name="email" />
    </p>
    <p>
        <slot name="phone" />
    </p>
    <div>
        <button type="button" class="btn btn-primary">Dark</button>
    </div>

</div>

</div>

`
class UserCard extends HTMLElement {
  num = 0;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('.alert-primary').innerHTML = this.getAttribute('name');
    this.innerHTML = this.getAttribute('name');
    this.cnt = 0;
  }

  connectedCallback() {
    const b = this;
    this.shadowRoot.querySelector('.btn').addEventListener('click', function () {
      console.log(++b.num, "  lll")
      console.log(this);
    });
  }

}

window.customElements.define('user-card', UserCard);