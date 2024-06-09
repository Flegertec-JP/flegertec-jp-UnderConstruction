document.addEventListener('DOMContentLoaded', function () {
  const memberInners = document.querySelectorAll('.member');

  memberInners.forEach(memberInner => {
    const content = memberInner.querySelector(".member-content");
    Draggable.create(memberInner, {
      type: "x,y",
      edgeResistance: 0.9,
      bounds: "html",
      onDragStart: function() { this.target.style.cursor = "grabbing"; },
      onDragEnd: function() { this.target.style.cursor = "grab"; }
    });
  });
});