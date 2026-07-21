module.exports = {

  async afterCreate(event) {

    const { result } = event;

    const now = new Date();

    const date =
      now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, '0') +
      String(now.getDate()).padStart(2, '0');

    const orderNumber =
      `ORD-${date}-${String(result.id).padStart(6, '0')}`;

    console.log('Создаем номер заявки:', orderNumber);

    await strapi.documents('api::order-request.order-request').update({
      documentId: result.documentId,
      data: {
        orderNumber
      }
    });

  }

};
