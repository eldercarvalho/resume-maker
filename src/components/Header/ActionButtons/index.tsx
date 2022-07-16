// import * as html2pdf from 'html2pdf.js';
import { FiPrinter } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

import Button from '@/components/base/Button';
import Tooltip from '@/components/base/Tooltip';
import { useIntl } from 'react-intl';

const ActionButtons: React.FC = () => {
  const intl = useIntl();

  // const handleDownloadClick = () => {
  //   const resume = document.querySelector('.sheet');

  //   const opt = {
  //     margin: 0,
  //     filename: 'myresume.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  //   };
  //   html2pdf().from(resume).set(opt).save();
  // };

  const handlePrintClick = () => {
    window.print();
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/eldercarvalho/resume-maker', '_blank');
  };

  return (
    <>
      {/* <Tooltip text={intl.formatMessage({ id: 'header.button.download.text' })}>
        <Button textOnly iconOnly onClick={handleDownloadClick}>
          <FiDownload size={20} />
        </Button>
      </Tooltip> */}

      <Tooltip text={intl.formatMessage({ id: 'header.button.print.text' })}>
        <Button textOnly iconOnly onClick={handlePrintClick}>
          <FiPrinter size={22} />
        </Button>
      </Tooltip>

      <Tooltip text={intl.formatMessage({ id: 'header.button.github.text' })}>
        <Button textOnly iconOnly onClick={handleGitHubClick}>
          <SiGithub size={22} />
        </Button>
      </Tooltip>
    </>
  );
};

export default ActionButtons;
