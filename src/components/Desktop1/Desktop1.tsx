import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { SearchIcon2 } from './SearchIcon2.js';
import { SearchIcon } from './SearchIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 275:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.salongologo1}></div>
      <div className={classes.services}>Services</div>
      <div className={classes.findASalon}>Find a salon</div>
      <div className={classes.products}>Products</div>
      <div className={classes.listYourSalon}>List your salon</div>
      <div className={classes.rectangle25}></div>
      <div className={classes.rectangle26}></div>
      <div className={classes.rectangle27}></div>
      <div className={classes.rectangle29}></div>
      <div className={classes.rectangle28}></div>
      <div className={classes.nameOrLocation}>Name or Location</div>
      <div className={classes.searchServices}>Search Services</div>
      <div className={classes.anytime}>Anytime</div>
      <div className={classes.search}>Search</div>
      <div className={classes.rectangle30}></div>
      <div className={classes.rectangle33}></div>
      <div className={classes.rectangle32}></div>
      <div className={classes.rectangle34}></div>
      <div className={classes.findTopRatedSalonsSpasAndParlo}>Find top-rated salons, Spas, and Parlours Around You</div>
      <div className={classes.hairBeautyAppointmentsAtYourFi}>
        <div className={classes.textBlock}>Hair &amp; Beauty </div>
        <div className={classes.textBlock2}>Appointments at your </div>
        <div className={classes.textBlock3}>fingertips</div>
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.rectangle36}></div>
      <div className={classes.salongologo2}></div>
      <div className={classes.cRMSoftware}>CRM Software</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.forSalons}>For Salons</div>
      <div className={classes.search2}>
        <SearchIcon className={classes.icon} />
      </div>
      <div className={classes.search3}>
        <SearchIcon2 className={classes.icon2} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon3} />
      </div>
      <div className={classes.aboutUsContactUsBlog}>
        <div className={classes.textBlock4}>About Us</div>
        <div className={classes.textBlock5}>Contact Us</div>
        <div className={classes.textBlock6}>Blog</div>
      </div>
      <div className={classes.cookiePolicy}>Cookie Policy</div>
      <div className={classes.privacyPolicy}>Privacy Policy</div>
      <div className={classes.fAQs}>FAQs</div>
      <div className={classes.termsAndConditions}>Terms and Conditions</div>
      <div className={classes.cancellationAndRefund}>Cancellation and Refund</div>
      <div className={classes.rectangle45}></div>
      <div className={classes.searchForASalonService}>Search for a Salon/Service</div>
    </div>
  );
});
