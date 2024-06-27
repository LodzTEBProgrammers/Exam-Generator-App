class FaqService{
constructor(){
    this.name = "FaqService"
}
async getFaqs(){
    const [rows] = await pool.query('SELECT * FROM faqs');
    return rows.length ? rows[0] : null;
}
async findByID(id) {
    const [rows] = await pool.query('SELECT * FROM faqs WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
  }

}

export default new FaqService();
