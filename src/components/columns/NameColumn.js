import { Column, ColumnStore } from '@bryntum/gantt';

class NameColumn extends Column {
  static get $name() {
    return 'NameColumn';
  }

  static get type() {
    return 'namecolumn';
  }

  static get isGanttColumn() {
    return true;
  }

  static get defaults() {
    return {
      field: 'name',
      text: 'Name',
      width: 250,
      expandIconCls: "b-fa-solid b-fa-angle-double-right",
      collapseIconCls: "b-fa-solid b-fa-angle-double-down",
      leafIconCls: "b-fa-solid b-fa-book",
    };
  }
}

ColumnStore.registerColumnType(NameColumn);