/**
 * Application configuration
 */
import { TaskModel, StringHelper } from "@bryntum/gantt";
import "./components/columns/NameColumn"; // our custom Name column
import "./components/FilesTab"; // custom files tab

class MyModel extends TaskModel {
  static get fields() {
    return [{ name: "deadline", type: "date" }, { name: "color" }];
  }
}

const ganttConfig = {
  project: {
    autoSetConstraints: true,
    autoLoad: true,
    taskModelClass: MyModel,
    transport: {
      load: {
        url: "data/launch-saas.json",
      },
    },
    // This config enables response validation and dumping of found errors to the browser console.
    // It's meant to be used as a development stage helper only so please set it to false for production systems.
    validateResponse: true,
    features: {
      // Disable dependencies editing in this demo
      filter: true,  
    }
  },

  // Shows a color field in the task editor and a color picker in the task menu.
  // Both lets the user select the Task bar's background color
  showTaskColorPickers: true,

  columns: [
    {
      type: "name",
      width: 250,
      expandIconCls: "b-fa-solid b-fa-angle-double-right",
      collapseIconCls: "b-fa-solid b-fa-angle-double-down",
      leafIconCls: "b-fa-solid b-fa-book",
      features: {
        filter: true,
      },
    },
    { type: "date", field: "deadline", text: "Deadline" },
    { type: "eventcolor", text: "Color" },
    {
      type: "resourceassignment",
      text: "Assigned Resources",
      showAvatars: true,
      width: 160,
    },
    { type: "startdate", text: "Start date" },
  ],

  taskEditFeature: {
    items: {
      generalTab: {
        // change title of General tab
        title: "Common",
        items: {
          customDivider: {
            html: "",
            dataset: {
              text: "Custom fields",
            },
            cls: "b-divider",
            flex: "1 0 100%",
          },
          deadlineField: {
            type: "datefield",
            name: "deadline",
            label: "Deadline",
            flex: "1 0 50%",
            cls: "b-inline",
          },
          priority: {
            type: "radiogroup",
            name: "priority",
            label: "Priority",
            labelWidth: "6.5em",
            flex: "1 0 100%",
            options: {
              high: "High",
              med: "Medium",
              low: "Low",
            },
          },
        },
      },
      // remove Notes tab
      notesTab: false,
      // add custom Files tab to the second position
      filesTab: {
        type: "filestab",
        weight: 110,
      },
      // customize the predecessors grid
      predecessorsTab: {
        items: {
          grid: {
            columns: {
              data: {
                // Our definition of the name column
                // is merged into the existing one.
                // We just add some configurations.
                name: {
                  // Grid cell values are rendered with extra info.
                  renderer({ record: dependency }) {
                    const predecessorTask = dependency.fromTask;
                    if (predecessorTask) {
                      return StringHelper.xss`${predecessorTask.name} (${predecessorTask.id})`;
                    }
                    return "";
                  },
                  // The cell editor, and its dropdown list
                  // also have this extra info.
                  editor: {
                    displayValueRenderer(taskRecord) {
                      return taskRecord
                        ? StringHelper.xss`${taskRecord.name} (${taskRecord.id})`
                        : "";
                    },
                    listItemTpl(taskRecord) {
                      return StringHelper.xss`${taskRecord.name} (${taskRecord.id})`;
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export { ganttConfig };
