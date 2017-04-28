export class InstructionFilterValueConverter {
  toView(navigationInstructions) {
    return navigationInstructions ? navigationInstructions.filter(i => {
      return (i.config.title);
    }) : [];
  }
}
