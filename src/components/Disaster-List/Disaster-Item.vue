<template>
  <div class="disaster-item">
    <img src="/fire-icon.png" alt="" />

    <div class="disaster-item-popover">
      <div class="title">Forest Fire</div>
      <div class="stats">
        <div class="stats-item">
          <div class="label">Happiness</div>
          <div class="value">-5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.disaster-item {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .disaster-item-popover {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);

    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
    backdrop-filter: blur(10px);
    border-radius: 0.5rem;
    border: 1px solid #bfbfbf;
    color: #000;
    padding: 0.1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 1;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    z-index: 99;
    min-width: 125px;
    .title {
      font-size: 0.75rem;
      font-weight: 700;
    }
    .stats {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .stats-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .label {
          font-size: 0.5rem;
          font-weight: 400;
          color: #fff;
        }
        .value {
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
