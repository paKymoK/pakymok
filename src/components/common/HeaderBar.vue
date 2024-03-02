<template>
  <div class="pb-[40px]">
    <div
      class="-z-1 bg-[url('https://act.hoyolab.com/app/community-game-records-sea/images/header_bg_pc.f6c2ab76.png')] bg-[#151515] bg-no-repeat"
    >
      <div class="px-8 flex items-center justify-between h-[56px] box-border">
        <div class="text-white">Logo Here</div>
        <div class="flex items-center text-white">
          <div
            class="relative cursor-pointer flex items-center px-[12px] rounded-[16px] h-[32px] bg-[#343746]"
          >
            <div
              class="w-[24px] h-[24px] bg-[length:100%_100%] bg-[url('./icons/language.png')]"
            ></div>
            <div
              class="select-none pl-[8px] pr-[12px] text-[16px] font-semibold"
            >
              EN
            </div>
            <div
              class="w-[16px] h-[16px] bg-[length:100%_100%] bg-[url('./icons/select.png')]"
            ></div>
            <div
              class="absolute top-[45px] right-[0px] select-none shadow-[0px 1px 8px 0px rgba(0,0,0,.2)] rounded-[10px] py-[21px] bg-[#1b1d2a]"
            >
              <ul
                class="list-none flex flex-col overflow-x-hidden overflow-y-auto overscroll-contain"
              >
                <li
                  class="text-left w-[204px] flex items-center px-[12px] pt-[10px] cursor-pointer text-[#8592a3] whitespace-nowrap m-[4px] leading-[20px] rounded-[8px]"
                >
                  <span
                    class="grow font-bold text-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
                    >English</span
                  >
                  <img
                    class="w-[20px] h-[20px] opacity-1"
                    src="../../assets/icons/selected.png"
                  />
                </li>
                <li
                  class="text-left w-[204px] flex items-center px-[12px] pt-[10px] cursor-pointer text-[#8592a3] whitespace-nowrap m-[4px] leading-[20px] rounded-[8px]"
                >
                  <span
                    class="grow font-bold text-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
                    >Tiếng Việt</span
                  >
                  <img
                    class="w-[20px] h-[20px] opacity-1"
                    src="../../assets/icons/selected.png"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>
