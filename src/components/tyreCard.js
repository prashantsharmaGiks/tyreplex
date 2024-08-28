import styles from "../styles/tyreCard.module.css";

function TyreCard({tyre}) {
  return (
    <div className={`card ${styles.tyreCard}`}>
      <div className="row g-0">
        {/* Image Section */}
        <div className={`col-md-5 ${styles.imageSection}`}>
          <img
            src={tyre.image}
            alt={tyre.name}
            className="img-fluid"
          />
          <span className={styles.warrantyTag}>{tyre.warranty} Year Warranty</span>
        </div>

        {/* Details Section */}
        <div className={`col-md-7 ${styles.detailsSection}`}>
          <div className="card-body">
            <h5 className={`card-title ${styles.tyreName}`}>{tyre.name}</h5>
            <div className={`d-flex align-items-center ${styles.ratingSection}`}>
              <div className={styles.rating}>
                <span className="fa fa-star fill-star"></span>
                <span>{tyre.rating}</span>
              </div>
              <span className={styles.reviewText}>{tyre.reviews} Reviews</span>
            </div>
            <p className={`card-text ${styles.price}`}>₹ {tyre.price}</p>
            <p className={styles.offerText}>Offer available</p>
            <p className={styles.variantInfo}>{tyre.variants} Variants Available</p>
            <p className={styles.features}>
              Tubeless <span className={styles.circle}></span> Tube Type
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TyreCard;
