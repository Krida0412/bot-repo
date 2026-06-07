import { describe, expect, it } from 'vitest';

import { parseBrowserLanguage } from './locale';

describe('parseBrowserLanguage', () => {
  // Helper function to create Headers with accept-language
  const createHeaders = (acceptLanguage?: string) => {
    const headers = new Headers();
    if (acceptLanguage) {
      headers.set('accept-language', acceptLanguage);
    }
    return headers;
  };

  describe('when DEFAULT_LANG is en-US', () => {
    it('should default to id-ID for ASAI when accept-language is empty', () => {
      const headers = createHeaders();
      expect(parseBrowserLanguage(headers)).toBe('id-ID');
    });

    it('should default to id-ID for ASAI even with English language preference', () => {
      const headers = createHeaders('en-US,en;q=0.9');
      expect(parseBrowserLanguage(headers)).toBe('id-ID');
    });

    it('should default to id-ID for ASAI even with Arabic language preference', () => {
      const headers = createHeaders('ar-SA,ar;q=0.9');
      expect(parseBrowserLanguage(headers)).toBe('id-ID');
    });

    it('should default to id-ID for ASAI even with ar-EG language preference', () => {
      const headers = createHeaders('ar-EG,ar;q=0.9');
      expect(parseBrowserLanguage(headers)).toBe('id-ID');
    });

    it('should default to id-ID for ASAI even with multiple language preferences', () => {
      const headers = createHeaders('zh-CN,zh;q=0.9,en;q=0.8');
      expect(parseBrowserLanguage(headers)).toBe('id-ID');
    });
  });

  describe('when DEFAULT_LANG is not en-US', () => {
    it('should still use the ASAI Indonesian default regardless of passed defaultLang', () => {
      const headers = createHeaders('en-US,en;q=0.9');
      expect(parseBrowserLanguage(headers, 'zh-CN')).toBe('id-ID');
    });
  });

  describe('error handling', () => {
    it('should handle invalid accept-language header format', () => {
      const headers = createHeaders('invalid-format');
      expect(parseBrowserLanguage(headers)).toBe('id-ID');
    });

    it('should handle empty Headers object', () => {
      const headers = new Headers();
      expect(parseBrowserLanguage(headers)).toBe('id-ID');
    });
  });
});
