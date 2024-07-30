const notifs = await Service.import("notifications");

export const Notifications = () => {
  return {
    component: Widget.Box({
      hpack: "start",
      child: Widget.Box({
        hpack: "start",
        class_name: "bar-notifications",
        children: Utils.merge(
          [notifs.bind("notifications"), notifs.bind("dnd")],
          (notif, dnd) => {
            const notifIcon = Widget.Label({
              hpack: "center",
              class_name: "bar-button-icon notifications",
              label: dnd ? "󰂛" : notif.length > 0 ? "󱅫" : "󰂚",
            });

            const notifLabel = Widget.Label({
              hpack: "center",
              class_name: "bar-button-label notifications",
              label: notif.length.toString(),
            });

            return [notifIcon];
          }
        ),
      }),
    }),
    isVisible: true,
    boxClass: "notifications",
    props: {
      on_primary_click: () => {
        Utils.execAsync("swaync-client -t").catch((err) => console.error(err));
      },
    },
  };
};
