import React from "react";
import { ConfirmModal } from "./ConfirmModal";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Notifications/UserModal",
  component: ConfirmModal,
};

const Template = (args) =>
  <ConfirmModal {...args} />;

export const UserModal = Template.bind({});
UserModal.args = {
  modal: {
    isOpen: true,
    title: 'Super modal',
    body: 'I am a modal body',
    onOk: () => { }
  }
};

export const UserModalCoffeeIpsum = Template.bind({});
UserModalCoffeeIpsum.args = {
  modal: {
    isOpen: true,
    title: 'Coffee Ipsum',
    body: `So steamed aftertaste, single shot as blue mountain iced java. Cinnamon and caffeine mazagran mug black et half and half. Steamed aroma grinder brewed beans dripper crema single shot. Beans frappuccino, flavour ristretto french press fair trade mazagran instant java body. Beans pumpkin spice cup wings that single shot cream.

    Flavour filter, ut, extraction as shop cappuccino rich milk blue mountain. Flavour fair trade, trifecta as robusta shop beans in acerbic breve sit cortado. Aged froth, beans extraction and cup whipped. Café au lait iced dripper milk, con panna fair trade aged dark arabica. Affogato, foam, aftertaste sugar doppio beans shop.
    
    Café au lait siphon frappuccino mug lungo as, in medium skinny brewed doppio ristretto. In pumpkin spice, eu java doppio wings and decaffeinated organic aged. Froth fair trade robusta rich americano extraction black brewed pumpkin spice a espresso. Cream viennese, aromatic filter barista affogato half and half extraction. Lungo, cream, decaffeinated affogato to go grinder siphon.
    
    Eu turkish mazagran et doppio, organic espresso, rich milk arabica aftertaste saucer. Medium cappuccino extra  skinny siphon aroma spoon doppio espresso mazagran. Sugar, robusta, redeye, body dark froth cappuccino variety sugar rich café au lait coffee. So, ut lungo dark organic that single shot seasonal. Doppio, robust coffee, that, aftertaste, mug, americano wings beans redeye brewed barista.`,
    onOk: () => { }
  }
};

