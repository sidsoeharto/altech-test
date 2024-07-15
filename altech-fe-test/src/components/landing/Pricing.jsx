import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__header">
        <h2 className="pricing__header__title">Pricing plans</h2>
        <p className='pricing__header__desc'>Try our basic plan risk free for 30 days. Switch plans or cancel any time.</p>
      </div>
      <div className="pricing__cards">
        <div className="pricing__card">
          <h3 className="pricing__card-title">Basic plan</h3>
          <p className="pricing__card-desc">Best for small teams and freelancers.</p>
          <p className="pricing__card-price">$10<span> per month</span></p>
          <button className="pricing__card-btn">Start free trial</button>
        </div>
        <div className="pricing__card">
          <h3 className="pricing__card-title">Business plan</h3>
          <p className="pricing__card-desc">Best for growing teams.</p>
          <p className="pricing__card-price">$20<span> per month</span></p>
          <button className="pricing__card-btn">Get started</button>
        </div>
        <div className="pricing__card">
          <h3 className="pricing__card-title">Enterprenuer plan</h3>
          <p className="pricing__card-desc">Best for large organizations.</p>
          <p className="pricing__card-price">$40<span> per month</span></p>
          <button className="pricing__card-btn">Get started</button>
        </div>
      </div>
      <table className="pricing__table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Basic plan</th>
            <th>Business plan</th>
            <th>Enterprise plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mencatat barang masuk</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Mencatat barang keluar</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Mencatat hasil keuntungan</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Dapat menganalisa hasil penjualan dengan CHART</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Support 7x24 Jam</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Export data ke Excel</td>
            <td></td>
            <td></td>
            <td>✓</td>
          </tr>
          <tr>
            <td>AI Prediksi penghasilan</td>
            <td></td>
            <td></td>
            <td>✓</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Pricing;