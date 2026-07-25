/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

function LocationMap() {
  return (
    <iframe
      title="Location"
      width="100%"
      height="350"
      style={{ border: 0, borderRadius: '12px' }}
      loading="lazy"
      allowFullScreen
      src="https://maps.google.com/maps?q=91B%20Aurobindo%20Sarani%2C%20Kolkata%20700006%2C%20Hatibagan%2C%20West%20Bengal%2C%20India&z=15&output=embed"
    />
  );
}

export default LocationMap;
