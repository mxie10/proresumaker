import React, { ChangeEvent, useState } from 'react';
import './ResumeForm.css';

const ResumeForm = () => {
  const [content, setContent] = useState('');
  const [pages, setPages] = useState([]);

  const handleContentChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    paginateContent(newContent);
  };

  const paginateContent = (newContent:string) => {
    const contentArray = newContent.split('\n');
    const pageSize = 10; // 每页行数
    const paginatedPages:any = [];

    for (let i = 0; i < contentArray.length; i += pageSize) {
      paginatedPages.push(contentArray.slice(i, i + pageSize).join('\n'));
    }

    setPages(paginatedPages);
  };

  return (
    <div className="resume-form">
      <h1>Resume Editor</h1>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Enter your resume content here..."
        rows={20}
        className="content-input"
      />
      <div className="pagination">
        {pages.map((page, index) => (
          <div key={index} className="page">
            <h2>Page {index + 1}</h2>
            <pre>{page}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeForm;
