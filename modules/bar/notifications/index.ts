import Gdk from "gi://Gdk?version=3.0";
import options from "options";

const { show_total } = options.bar.notifications;
const { terminal } = options;

const notifs = await Service.import("notifications");

export const Notifications = () => {
  return {
    component: Widget.Box({
      hpack: "start",
      child: Widget.Box({
        hpack: "start",
        class_name: "bar-notifications",
        children: Utils.merge(
          [
            notifs.bind("notifications"),
            notifs.bind("dnd"),
            show_total.bind("value"),
          ],
          (notif, dnd, showTotal) => {
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

            if (showTotal) {
              return [notifIcon, notifLabel];
            }
            return [notifIcon];
          }
        ),
      }),
    }),
    isVisible: true,
    boxClass: "notifications",
    props: {
      on_primary_click: (clicked: any, event: Gdk.Event) => {
        Utils.execAsync("swaync-client -t").catch((err) => console.error(err));
      },
    },
  };
};
