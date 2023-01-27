<template>
  <section id="navbar">
    <!-- awal navbar -->
    <div class="container-fluid border-b-2">
      <div class="flex justify-between py-2 mx-9 items-center">
        <!-- menu kiri -->
        <div class="w-full flex flex-wrap gap-5">
          <img src="../assets/logo2.png" class="w-4" alt="" />
          <h1 class="text-xl logo">WEB DASHBOARD OPERASIONAL 2023</h1>
        </div>
        <!-- akhir menu kiri -->

        <!-- menu kanan -->
        <div class="w-full flex flex-wrap gap-4 relative left-[80px]">
          <button class="btn text-sm flex flex-wrap gap-1 items-center py-1">
            <svg
              viewBox="0 0 21 21"
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="#bcbcbc"
              stroke="#bcbcbc"
              transform="rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(2 2)"
                >
                  <path
                    d="m4.5 1.5c-2.4138473 1.37729434-4 4.02194088-4 7 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"
                  ></path>
                  <path d="m4.5 5.5v-4h-4"></path>
                </g>
              </g>
            </svg>
            Reset
          </button>

          <button
            class="btn text-sm flex flex-wrap gap-1 items-center py-1 w-36"
          >
            <svg
              viewBox="0 0 24 24"
              class="w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19.49 17.98H16.51"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18 16.52V19.51"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>

            <span class="text-tombol">Bagikan</span>
          </button>

          <button
            class="btn text-sm flex flex-wrap gap-1 w-24 items-center py-1 bg-tombol"
          >
            <svg
              viewBox="0 0 24 24"
              class="w-5 mx-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M18 9.99982L14 5.99982M2.5 21.4998L5.88437 21.1238C6.29786 21.0778 6.5046 21.0549 6.69785 20.9923C6.86929 20.9368 7.03245 20.8584 7.18289 20.7592C7.35245 20.6474 7.49955 20.5003 7.79373 20.2061L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L3.79373 16.2061C3.49955 16.5003 3.35246 16.6474 3.24064 16.8169C3.14143 16.9674 3.06301 17.1305 3.00751 17.302C2.94496 17.4952 2.92198 17.702 2.87604 18.1155L2.5 21.4998Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <span class="text-white">Edit</span>
          </button>

          <button
            class="text-sm flex gap-1 items-center py-1 w-11 h-11 outline outline-solid outline-2 outline-abu rounded-full"
          >
            <svg
              fill="#1A73E8"
              viewBox="0 0 32 32"
              class="w-6 h-6 flex mx-auto"
              enable-background="new 0 0 32 32"
              id="Glyph"
              version="1.1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z"
                  id="XMLID_294_"
                ></path>
                <path
                  d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z"
                  id="XMLID_295_"
                ></path>
                <path
                  d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z"
                  id="XMLID_297_"
                ></path>
              </g>
            </svg>
          </button>

          <div class="font-light text-bodi relative">
            <span class="bottom-[-7px] left-30 absolute text-[45px]">|</span>
          </div>

          <button class="text-sm flex gap-1 items-center py-1 w-11 h-11">
            <svg
              fill="#7c7979"
              class="w-6 mx-auto"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="201px"
              height="201px"
              viewBox="0 0 512.00 512.00"
              enable-background="new 0 0 512 512"
              xml:space="preserve"
              stroke="#7c7979"
              stroke-width="0.00512"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                  ></path>
                  <rect x="240" y="352" width="32" height="32"></rect>
                  <path
                    d="M317.734,150.148c-6.484-6.625-14.688-11.922-24.766-16.031c-10.203-4.102-22.172-6.117-36.281-6.117 c-11.969,0-22.875,2.016-32.781,6.117c-9.938,4.109-18.5,9.773-25.688,17.125c-7.125,7.289-12.672,14.508-16.5,24.773 C177.906,186.281,176,192,176,208h32.656c0-16,4.234-28.109,12.938-38.516c8.594-10.453,20.266-14.82,35.094-14.82 c14.438,0,25.234,3.914,32.172,10.938c6.875,7.023,10.391,17.086,10.391,29.797c0,9.883-3.25,18.758-9.734,26.492 c-6.375,7.75-13.359,15.297-20.844,22.438c-7.594,7.141-13.672,14.766-19.953,22.641S240,284.016,240,294.469V320h32v-13.75 c0-8.203,1.203-15.312,4.406-21.516c3.094-6.219,6.953-11.859,11.844-16.891c4.734-5.094,9.812-10,15.469-14.828 c5.5-4.766,10.781-9.859,15.531-15.172c4.844-5.344,8.875-11.344,11.938-17.969c3.219-6.625,4.828-14.406,4.828-23.477 c0-7.875-1.422-15.891-4.391-24.039C328.719,164.148,324.031,156.766,317.734,150.148z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>

          <button class="text-sm flex gap-1 items-center py-1 w-11 h-11">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              id="user-circle"
              data-name="Flat Color"
              xmlns="http://www.w3.org/2000/svg"
              class="icon flat-color"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle
                  id="primary"
                  cx="12"
                  cy="12"
                  r="10"
                  style="fill: #1a73e8"
                ></circle>
                <path
                  id="secondary"
                  d="M15.15,14.88a5,5,0,1,0-6.3,0A6,6,0,0,0,6,19.4a1,1,0,0,0,.43.93,10,10,0,0,0,11.06,0A1,1,0,0,0,18,19.4,6,6,0,0,0,15.15,14.88Z"
                  style="fill: #053685"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <!-- akhir menu kanan -->
      </div>
    </div>
    <div class="container-fluid border-b-2">
      <div
        class="flex py-5 mx-auto  flex-wrap items-center gap-5 text-tombol text-sm"
      >
        <nav class="hover:bg-bodi">Home</nav>
      </div>
    </div>
    <!-- akhir navbar -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
